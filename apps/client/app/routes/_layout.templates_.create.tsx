import TemplateEditor from "~/components/TemplateEditor";

const CreateTemplate = () => {
  return (
    <div>
      <div className="flex items-center mb-6">
        <h1 className="text-4xl font-bold"> Create new Template</h1>
      </div>
      <TemplateEditor/>
    </div>
  );
}

export default CreateTemplate