
import AddProjectForm from "@/components/AddProjectForm";

const AddProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(59,130,246,0.02)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
      
      <div className="w-full max-w-2xl relative z-10">
        <AddProjectForm />
      </div>
    </div>
  );
};

export default AddProject;
