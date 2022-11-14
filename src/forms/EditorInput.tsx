import dynamic from "next/dynamic";
import styles from "./EditorInput.module.scss"

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface EditorInputProps {
  onChange?: (v: any) => void;
  value?: any;
}

const EditorInput: React.FC<EditorInputProps> = ({ onChange, value }) => {
  return (
    <div className={styles.editorInput}>
      <ReactQuill theme="snow" value={value || ""} onChange={onChange} />
    </div>
  );
};

export { EditorInput };
