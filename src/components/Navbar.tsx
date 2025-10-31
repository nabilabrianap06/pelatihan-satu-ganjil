// File: src/components/Navbar.tsx

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    // Latar belakang putih, teks gelap, dan bayangan tipis (shadow-md)
    <nav className="bg-white text-gray-800 p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Nama Anda dengan aksen warna biru */}
        <Link href="/" className="font-bold text-xl text-blue-700 hover:text-blue-500 transition-colors duration-200">
          Nabil Abrian
        </Link>
        
        {/* Link navigasi dengan teks abu-abu tua, hover menjadi biru */}
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500 transition-colors duration-200">Home</Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-500 transition-colors duration-200">Projects</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-500 transition-colors duration-200">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;