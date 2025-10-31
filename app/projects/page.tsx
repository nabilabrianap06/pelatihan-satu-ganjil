// File: app/projects/page.tsx

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-8 pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">My Projects</h1>
      <div className="text-center text-gray-600">
        <p>(Project list fetched from the CMS will be displayed here)</p>
        {/* This section will be replaced later with code to fetch and display projects */}
      </div>
    </div>
  );
}