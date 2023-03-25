import { CommonTableView } from "@commons";
import { useHeader } from "@components/HeaderProvider";
import * as Gql from "@graphql";
import { getErrorMessage } from "@utils";
import { message } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Locations = () => {
  const router = useRouter();
  const { setTitle } = useHeader();
  const [val, setVal] = useState();

  const {
    data,
    loading: locationLoading,
    refetch,
    error,
  } = Gql.useGetLocationsQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    refetch();
  }, [data !== undefined]);
  console.log("error", error);

  console.log("data", data);

  const parseFilter = () => {
    const query = router.query;
    const res = { and: [] as any[] };

    return res;
  };

  const totalCount = data?.locations?.totalCount || 0;

  useEffect(() => {
    setTitle("Locations");
  }, []);

  const columns = [
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Lat",
      dataIndex: "lat",
    },
    {
      title: "Lang",
      dataIndex: "lang",
    },
    {
      title: "Range to scan",
      dataIndex: "range",
      render: (range: string) => `${range} meter`,
    },
  ];

  const onRow = (shiftOption: any) => {
    return {
      onClick: () => router.push(`/locations/add-or-edit/${shiftOption.id}`),
    };
  };

  const loading = locationLoading;
  return (
    <>
      <div className="p-9">
        <CommonTableView
          tableTitle={`Locations (${totalCount})`}
          // @ts-ignore
          columns={columns}
          loading={loading}
          refetch={refetch}
          dataSource={data?.locations?.nodes || []}
          totalCount={totalCount}
          gqlFilters={parseFilter()}
          onRow={onRow}
        />
      </div>
    </>
  );
};

Locations.auth = true;

export default Locations;
