// File: app/page.tsx

export default function HomePage() {
  return (
    // Wrapper utama halaman:
    // - Latar belakang gradasi biru tua yang elegan
    <section className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900 p-8">
      
      {/* Kotak konten putih bersih dengan bayangan (shadow) */}
      <div className="bg-white p-12 md:p-16 rounded-lg shadow-xl text-center max-w-3xl">

        {/* Judul dengan warna teks biru tua */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
          Welcome to My Portfolio Website!
        </h1>
        
        {/* Teks paragraf dengan warna abu-abu tua agar mudah dibaca */}
        <p className="text-lg md:text-xl text-gray-700 mb-2">
          I&apos;m Nabil Abrian Aryo Prabowo, an Information Engineering student currently exploring various areas within IT, including data science, web development, and cyber security.
        </p>
        
        <p className="text-md md:text-lg text-gray-600">
          Discover the projects that highlight my skills and learning journey.
        </p>

      </div>
    </section>
  );
}