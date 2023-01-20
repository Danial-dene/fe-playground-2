import { useHeader } from "@components/HeaderProvider";
import * as Gql from "@graphql";
import { Card, DatePicker, Descriptions, Form } from "antd";
import _ from "lodash";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";

const { RangePicker } = DatePicker;

const CalculateSalary = () => {
  const router = useRouter();
  const { id } = router.query;
  const { setTitle } = useHeader();

  const formRef = useRef<any>();

  const [filter, setFilter] = useState({});

  const { data, loading, refetch, error } = Gql.useGetShiftsQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    skip: !id,
    variables: {
      filter: { employee: { id: { eq: id as string } }, ...filter },
      paging: {
        limit: 30,
        offset: 0,
      },
      sorting: [
        {
          field: Gql.ShiftSortFields.Date,
          direction: Gql.SortDirection.Asc,
        },
      ],
    },
  });

  const { data: employeeData } = Gql.useGetOneEmployeeQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    skip: !id,
    variables: {
      id: id as string,
    },
  });
  console.log("employeeData", employeeData);
  const employeeDetail = employeeData?.employee;
  // console.log("error", error);

  let total = 0;
  const record = data?.shifts?.nodes || [];

  const totalSalary = _.map(record, (obj: Gql.Shift) => {
    total += obj?.total;
    return total;
  });

  const firstDate = _.first(record);
  const lastDate = _.last(record);

  console.log("record", record);

  useEffect(() => {
    setTitle("Employees");
  }, []);

  const onFinish = (val: any) => {
    const { date } = val;
    const res = {};
    const convertStartDate = moment(date[0], "DD-MM-YYYY").startOf("day");
    const convertEndDate = moment(date[1], "DD-MM-YYYY").endOf("day");

    console.log("convertStartDate", convertStartDate);

    const isoStartDate = convertStartDate.toISOString();
    const isoEndDate = convertEndDate.toISOString();

    _.assign(res, {
      date: {
        between: { lower: isoStartDate, upper: isoEndDate },
      },
    });

    setFilter(res);
  };

  return (
    <>
      <Card className="gap-4">
        <Card>
          <Descriptions column={1}>
            <Descriptions.Item label="Name">
              {employeeDetail?.name}
            </Descriptions.Item>

            <Descriptions.Item label="Employee No ">
              {employeeDetail?.employeeNo}
            </Descriptions.Item>

            <Descriptions.Item label="IC No. ">
              {employeeDetail?.icNo}
            </Descriptions.Item>
          </Descriptions>
        </Card>

        <SalaryCount
          employeeDetail={employeeDetail}
          data={data}
          totalSalary={_.sum(totalSalary)}
          lastDate={lastDate}
          firstDate={firstDate}
        />

        <Form ref={formRef} onFinish={onFinish} className="my-4">
          <Form.Item name="date" label="Calculate salary from">
            <RangePicker onChange={() => formRef?.current?.submit()} />
          </Form.Item>
        </Form>
        {_.map(data?.shifts?.nodes, (obj, index) => {
          console.log("obj", obj);

          return (
            <Card className="my-4">
              <Descriptions column={2} bordered>
                <Descriptions.Item span={2} label="No">
                  {index + 1}
                </Descriptions.Item>

                <Descriptions.Item label="Date">
                  {moment(obj?.date).format("DD-MM-YYYY")}
                </Descriptions.Item>

                <Descriptions.Item label="Hours">
                  {obj?.hours}
                </Descriptions.Item>

                <Descriptions.Item label="Rate per hour">
                  {obj?.shiftOptions?.rate.toFixed(2)}
                </Descriptions.Item>

                <Descriptions.Item label="Rate ot per hour">
                  {obj?.shiftOptions?.otRate.toFixed(2)}
                </Descriptions.Item>

                <Descriptions.Item label="Total per day">
                  {obj?.total.toFixed(2)}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          );
        })}
      </Card>
    </>
  );
};

CalculateSalary.auth = true;

export default CalculateSalary;

type SalaryCountProps = {
  employeeDetail: any;
  data: any;
  totalSalary: number;
  lastDate: any;
  firstDate: any;
};
const SalaryCount: React.FC<SalaryCountProps> = ({
  employeeDetail,
  data,
  totalSalary,
  lastDate,
  firstDate,
}) => {
  const total = totalSalary - employeeDetail?.loan;

  return (
    <Card
      className="my-4"
      bordered
      actions={[
        <div key="1">
          <p className="text-black">
            Total after deduction: RM{total.toFixed(2)}
          </p>
        </div>,
      ]}
      title={
        <div>
          Total salary from {moment(firstDate?.date).format("DD-MM-YYYY")} to{" "}
          {moment(lastDate?.date).format("DD-MM-YYYY")} is RM
          {totalSalary.toFixed(2)}
        </div>
      }
    >
      <div className="grid grid-cols-3 gap-4">
        <Card title={<div className="text-center ">Deduction</div>}>
          <div className="text-center ">
            <FaIcons.FaMoneyBillAlt size={30} />
          </div>
          <Descriptions column={1}>
            <Descriptions.Item label="Loan">
              {employeeDetail?.loan}
            </Descriptions.Item>

            <Descriptions.Item label="EPF">{}</Descriptions.Item>

            <Descriptions.Item label="SOCSO">{}</Descriptions.Item>
          </Descriptions>
        </Card>

        <Card title={<div className="text-center ">Total Shift</div>}>
          <div className="text-center ">
            <IoIcons.IoCalendarSharp size={30} />
          </div>
          <div className="text-center text-2xl ">
            <p className=" text-2xl ">{data?.shifts?.nodes?.length}</p>
          </div>
        </Card>
      </div>
    </Card>
  );
};
