/* ============================================================
   PROJECTS DATA
   ============================================================

   File ini berisi seluruh data proyek portfolio.

   Ada 2 kelompok proyek:
   1. uiux -> UI/UX & Frontend
   2. data -> Data Analysis & Science

   ------------------------------------------------------------
   STRUKTUR PROYEK:

   {
     title: "Judul Proyek",

     shortDescription:
       "Deskripsi singkat yang tampil pada card.",

     description:
       "Deskripsi lengkap yang tampil pada popup.",

     cover:
       "assets/images/uiux/nama-file-cover.jpg",

     media: {
       type: "images",
       images: [
         "assets/images/uiux/project-1.jpg",
         "assets/images/uiux/project-2.jpg"
       ]
     }
   }

   ATAU:

   media: {
     type: "pdf",
     pdf: "assets/pdf/data/laporan.pdf"
   }

   ------------------------------------------------------------
   type "images":
   - Bisa 1 gambar
   - Bisa banyak gambar
   - Jika lebih dari 1, otomatis muncul Next / Previous

   type "pdf":
   - PDF ditampilkan di dalam popup
   - Bisa di-scroll

   ============================================================ */


const projectsData = {

  /* ==========================================================
     UI/UX & FRONTEND
     ========================================================== */

  uiux: [

    {
      title: "Attendance Website - PT Hanampi Sejahtera Kahuripan",

      shortDescription:
        "A location-based attendance system for efficient employee check-ins and HR management.",

      description:
        "Designed the UI/UX and implemented the frontend of a location-based digital attendance system to replace the existing fingerprint-based attendance process. The system allows employees to check in and out with location verification while enabling HR to manage attendance records more efficiently. Features such as employee management, shift settings, attendance monitoring, and data export help reduce manual Excel-based recordkeeping and simplify attendance administration.",

      cover:
        "assets/images/uiux/presensi/1.png",

      media: {
        type: "images",

        images: [
          "assets/images/uiux/presensi/1.png",
          "assets/images/uiux/presensi/2.png",
          "assets/images/uiux/presensi/3.png",
          "assets/images/uiux/presensi/4.png",
          "assets/images/uiux/presensi/5.png",
          "assets/images/uiux/presensi/6.png",
          "assets/images/uiux/presensi/7.png",
          "assets/images/uiux/presensi/8.png",
          "assets/images/uiux/presensi/9.png",
          "assets/images/uiux/presensi/10.png",
          "assets/images/uiux/presensi/11.png",
          "assets/images/uiux/presensi/12.png",    
          "assets/images/uiux/presensi/13.png",
          "assets/images/uiux/presensi/14.png",
          "assets/images/uiux/presensi/15.png"
        ]
      }
    },


    {
      title: "Onemens Leather Website",

      shortDescription:
        "An SME website designed to showcase product catalogs, stock availability, and customer interactions through an intuitive interface.",

      description:
        "Designed the UI/UX and implemented the frontend of a website for Onemens Leather, a small and medium-sized business. The website allows customers to explore product catalogs, check stock availability, and leave comments on products. On the admin side, the system provides features for managing product data and stock availability. Purchases are redirected to E-Commerce platforms, allowing the website to focus on product presentation and a convenient catalog browsing experience.",

      cover:
        "assets/images/uiux/onemens/cover.png",

      media: {
        type: "images",

        images: [
          "assets/images/uiux/onemens/1.png",
          "assets/images/uiux/onemens/2.png",
          "assets/images/uiux/onemens/3.png",
          "assets/images/uiux/onemens/4.png",
          "assets/images/uiux/onemens/5.png",
          "assets/images/uiux/onemens/6.png",
          "assets/images/uiux/onemens/7.png",
          "assets/images/uiux/onemens/8.png",
          "assets/images/uiux/onemens/9.png",
          "assets/images/uiux/onemens/10.png",
          "assets/images/uiux/onemens/11.png",
          "assets/images/uiux/onemens/12.png",    
          "assets/images/uiux/onemens/13.png"
        ]
      }
    },


    {
      title: "UI/UX Design - ARena Thrift",

      shortDescription:
        "Perancangan UI/UX sistem absensi karyawan berbasis web yang terdiri dari 42 halaman.",

      description:
        "Mendesain prototipe UI/UX untuk sistem absensi karyawan berbasis web yang terdiri dari 42 halaman. Perancangan dilakukan dengan mempertimbangkan kebutuhan dua jenis pengguna, yaitu tim HR dan karyawan. Fokus utama proyek adalah menciptakan alur penggunaan yang sederhana, struktur informasi yang jelas, serta antarmuka yang mudah digunakan dalam proses absensi dan pengelolaan data karyawan.",

      cover:
        "assets/images/uiux/arena-thrift/1.png",

      media: {
        type: "images",

        images: [
          "assets/images/uiux/arena-thrift/1.png",
          "assets/images/uiux/arena-thrift/2.png",
          "assets/images/uiux/arena-thrift/3.png",
          "assets/images/uiux/arena-thrift/4.png",
          "assets/images/uiux/arena-thrift/5.png",
          "assets/images/uiux/arena-thrift/6.png",
          "assets/images/uiux/arena-thrift/7.png",
          "assets/images/uiux/arena-thrift/8.png",
          "assets/images/uiux/arena-thrift/9.png",
          "assets/images/uiux/arena-thrift/10.png",
          "assets/images/uiux/arena-thrift/11.png",
          "assets/images/uiux/arena-thrift/12.png",
          "assets/images/uiux/arena-thrift/13.png",
          "assets/images/uiux/arena-thrift/14.png",
          "assets/images/uiux/arena-thrift/15.png",
          "assets/images/uiux/arena-thrift/16.png",
          "assets/images/uiux/arena-thrift/17.png",
          "assets/images/uiux/arena-thrift/18.png",
          "assets/images/uiux/arena-thrift/19.png"
        ]
      }
    },


    {
      title: "UI/UX Design - Travolution",

      shortDescription:
        "Perancangan UI/UX sistem absensi karyawan berbasis web yang terdiri dari 42 halaman.",

      description:
        "Mendesain prototipe UI/UX untuk sistem absensi karyawan berbasis web yang terdiri dari 42 halaman. Perancangan dilakukan dengan mempertimbangkan kebutuhan dua jenis pengguna, yaitu tim HR dan karyawan. Fokus utama proyek adalah menciptakan alur penggunaan yang sederhana, struktur informasi yang jelas, serta antarmuka yang mudah digunakan dalam proses absensi dan pengelolaan data karyawan.",

      cover:
        "assets/images/uiux/travolution/1.png",

      media: {
        type: "images",

        images: [
          "assets/images/uiux/travolution/1.png",
          "assets/images/uiux/travolution/2.png",
          "assets/images/uiux/travolution/3.png",
          "assets/images/uiux/travolution/4.png",
          "assets/images/uiux/travolution/5.png",
          "assets/images/uiux/travolution/6.png",
          "assets/images/uiux/travolution/7.png",
          "assets/images/uiux/travolution/8.png",
          "assets/images/uiux/travolution/9.png",
          "assets/images/uiux/travolution/10.png",
          "assets/images/uiux/travolution/11.png",
          "assets/images/uiux/travolution/12.png",
          "assets/images/uiux/travolution/13.png",
          "assets/images/uiux/travolution/14.png",
          "assets/images/uiux/travolution/15.png",
          "assets/images/uiux/travolution/16.png"
        ]
      }
    },


    {
      title: "Telaga Sarangan - Augmented Reality Game",

      shortDescription:
        "Perancangan UI/UX sistem absensi karyawan berbasis web yang terdiri dari 42 halaman.",

      description:
        "Mendesain prototipe UI/UX untuk sistem absensi karyawan berbasis web yang terdiri dari 42 halaman. Perancangan dilakukan dengan mempertimbangkan kebutuhan dua jenis pengguna, yaitu tim HR dan karyawan. Fokus utama proyek adalah menciptakan alur penggunaan yang sederhana, struktur informasi yang jelas, serta antarmuka yang mudah digunakan dalam proses absensi dan pengelolaan data karyawan.",

      cover:
        "assets/images/uiux/telaga-sarangan/1.png",

      media: {
        type: "images",

        images: [
          "assets/images/uiux/telaga-sarangan/1.png",
          "assets/images/uiux/telaga-sarangan/2.png",
          "assets/images/uiux/telaga-sarangan/3.png",
          "assets/images/uiux/telaga-sarangan/4.png",
          "assets/images/uiux/telaga-sarangan/5.png",
          "assets/images/uiux/telaga-sarangan/6.png",
          "assets/images/uiux/telaga-sarangan/7.png",
          "assets/images/uiux/telaga-sarangan/8.png",
          "assets/images/uiux/telaga-sarangan/9.png"
        ]
      }
    },


    {
      title: "LeleQue Website",

      shortDescription:
        "Website company profile dengan katalog produk dan tampilan yang bersih serta mudah dinavigasi.",

      description:
        "Merancang dan membangun website company profile untuk brand produk kulit lokal Onemens Leather. Proyek ini berfokus pada perancangan antarmuka yang bersih, navigasi yang intuitif, serta penyajian informasi dan katalog produk agar mudah dijelajahi oleh pengunjung. Proses pengerjaan mencakup perancangan struktur halaman, desain antarmuka, hingga implementasi halaman website.",

      cover:
        "assets/images/uiux/LeleQue/1.png",

      media: {
        type: "images",

        images: [
          "assets/images/uiux/LeleQue/1.png",
          "assets/images/uiux/LeleQue/2.png",
          "assets/images/uiux/LeleQue/3.png",
          "assets/images/uiux/LeleQue/4.png",
          "assets/images/uiux/LeleQue/5.png",
          "assets/images/uiux/LeleQue/6.png",
          "assets/images/uiux/LeleQue/7.png",
          "assets/images/uiux/LeleQue/8.png",
          "assets/images/uiux/LeleQue/9.png",
          "assets/images/uiux/LeleQue/10.png"
        ]
      }
    },


    {
      title: "Bu'e Cookies Website",

      shortDescription:
        "Dashboard interaktif untuk membantu HR memantau pola dan status kehadiran karyawan.",

      description:
        "Mengembangkan dashboard monitoring kehadiran interaktif yang dirancang untuk membantu tim HR memahami kondisi kehadiran karyawan dengan lebih mudah. Dashboard mencakup 9 komponen visualisasi untuk menampilkan berbagai informasi seperti status kehadiran, tren kehadiran, serta data berdasarkan departemen. Proyek ini menggabungkan pengembangan antarmuka dengan penyajian data dalam bentuk visual yang informatif.",

      cover:
        "assets/images/uiux/bue/1.png",

      media: {
        type: "images",

        images: [
          "assets/images/uiux/bue/1.png",
          "assets/images/uiux/bue/2.png",
          "assets/images/uiux/bue/3a.png",
          "assets/images/uiux/bue/3b.png",
          "assets/images/uiux/bue/3c.png",
          "assets/images/uiux/bue/3d.png",
          "assets/images/uiux/bue/3e.png",
          "assets/images/uiux/bue/4.png",
          "assets/images/uiux/bue/5.png",
          "assets/images/uiux/bue/6.png",
          "assets/images/uiux/bue/7.png",
          "assets/images/uiux/bue/8.png",
          "assets/images/uiux/bue/9.png",
          "assets/images/uiux/bue/10.png"
        ]
      }
    },


    {
      title: "UI/UX Design - Tutor Sebaya",

      shortDescription:
        "Dashboard interaktif untuk membantu HR memantau pola dan status kehadiran karyawan.",

      description:
        "Mengembangkan dashboard monitoring kehadiran interaktif yang dirancang untuk membantu tim HR memahami kondisi kehadiran karyawan dengan lebih mudah. Dashboard mencakup 9 komponen visualisasi untuk menampilkan berbagai informasi seperti status kehadiran, tren kehadiran, serta data berdasarkan departemen. Proyek ini menggabungkan pengembangan antarmuka dengan penyajian data dalam bentuk visual yang informatif.",

      cover:
        "assets/images/uiux/tutor-sebaya/1.png",

      media: {
        type: "images",

        images: [
          "assets/images/uiux/tutor-sebaya/1.png",
          "assets/images/uiux/tutor-sebaya/2.png",
          "assets/images/uiux/tutor-sebaya/3.png",
          "assets/images/uiux/tutor-sebaya/4.png",
          "assets/images/uiux/tutor-sebaya/5.png",
          "assets/images/uiux/tutor-sebaya/6.png",
          "assets/images/uiux/tutor-sebaya/7.png",
          "assets/images/uiux/tutor-sebaya/8.png",
          "assets/images/uiux/tutor-sebaya/9.png",
          "assets/images/uiux/tutor-sebaya/10.png",
          "assets/images/uiux/tutor-sebaya/11.png",
          "assets/images/uiux/tutor-sebaya/12.png",
          "assets/images/uiux/tutor-sebaya/13.png",
          "assets/images/uiux/tutor-sebaya/14.png",
          "assets/images/uiux/tutor-sebaya/15.png",
          "assets/images/uiux/tutor-sebaya/16.png",
          "assets/images/uiux/tutor-sebaya/17.png",
          "assets/images/uiux/tutor-sebaya/18.png",
          "assets/images/uiux/tutor-sebaya/19.png",
          "assets/images/uiux/tutor-sebaya/20.png",
          "assets/images/uiux/tutor-sebaya/21.png",
          "assets/images/uiux/tutor-sebaya/22.png"
        ]
      }
    },


    {
      title: "Buitenzorg Website",

      shortDescription:
        "Dashboard interaktif untuk membantu HR memantau pola dan status kehadiran karyawan.",

      description:
        "Mengembangkan dashboard monitoring kehadiran interaktif yang dirancang untuk membantu tim HR memahami kondisi kehadiran karyawan dengan lebih mudah. Dashboard mencakup 9 komponen visualisasi untuk menampilkan berbagai informasi seperti status kehadiran, tren kehadiran, serta data berdasarkan departemen. Proyek ini menggabungkan pengembangan antarmuka dengan penyajian data dalam bentuk visual yang informatif.",

      cover:
        "assets/images/uiux/buitenzorg/cover.png",

      media: {
        type: "images",

        images: [
          "assets/images/uiux/buitenzorg/1.png",
          "assets/images/uiux/buitenzorg/2.png",
          "assets/images/uiux/buitenzorg/3.png",
          "assets/images/uiux/buitenzorg/4.png",
          "assets/images/uiux/buitenzorg/5.png"
        ]
      }
    }


    /* Tambahkan proyek UI/UX lainnya di sini */

  ],


  /* ==========================================================
     DATA ANALYSIS & SCIENCE
     ========================================================== */

  data: [

    {
      title: "Attendance Monitoring Dashboard - PT Hanampi Sejahtera Kahuripan",

      shortDescription:
        "Dashboard interaktif untuk membantu HR memantau pola dan status kehadiran karyawan.",

      description:
        "Mengembangkan dashboard monitoring kehadiran interaktif yang dirancang untuk membantu tim HR memahami kondisi kehadiran karyawan dengan lebih mudah. Dashboard mencakup 9 komponen visualisasi untuk menampilkan berbagai informasi seperti status kehadiran, tren kehadiran, serta data berdasarkan departemen. Proyek ini menggabungkan pengembangan antarmuka dengan penyajian data dalam bentuk visual yang informatif.",

      cover:
        "assets/images/data/attendance-cover.png",

      media: {
        type: "pdf",

        pdf:
          "assets/pdf/data/dashboard-monitoring.pdf"
      }
    },


    {
      title: "Household Power Consumption Analysis",

      shortDescription:
        "Analisis clustering K-Means untuk menemukan pola dan segmentasi konsumsi daya listrik rumah tangga.",

      description:
        "Melakukan analisis clustering menggunakan algoritma K-Means dengan Python untuk mengidentifikasi pola konsumsi daya listrik rumah tangga. Data dianalisis berdasarkan karakteristik penggunaan energi untuk menemukan kelompok dengan pola konsumsi yang serupa. Hasil analisis kemudian digunakan untuk memahami karakteristik masing-masing kelompok konsumsi energi.",

      cover:
        "assets/images/data/household-cover.png",

      media: {
        type: "pdf",

        pdf:
          "assets/pdf/data/household-power.pdf"
      }
    },


    {
      title: "Covid-19 Data Analysis & Visualization",

      shortDescription:
        "Visualisasi data sosial-ekonomi Indonesia dalam bentuk dashboard interaktif menggunakan Tableau.",

      description:
        "Menganalisis data sosial-ekonomi Indonesia dan menyajikan hasilnya melalui dashboard interaktif menggunakan Tableau. Proyek ini berfokus pada proses eksplorasi data, pemilihan indikator yang relevan, serta penyusunan visualisasi untuk membantu pengguna memahami kondisi sosial-ekonomi melalui informasi yang lebih terstruktur dan mudah dipahami.",

      cover:
        "assets/images/data/dashboard-covid.jpeg",

      media: {
        type: "images",

        images: [
          "assets/images/data/dashboard-covid.jpeg",
        ]
      }
    },

    {
      title: "Customer Data Segmentation Analysis",

      shortDescription:
        "Analisis clustering K-Means untuk menemukan pola dan segmentasi konsumsi daya listrik rumah tangga.",

      description:
        "Melakukan analisis clustering menggunakan algoritma K-Means dengan Python untuk mengidentifikasi pola konsumsi daya listrik rumah tangga. Data dianalisis berdasarkan karakteristik penggunaan energi untuk menemukan kelompok dengan pola konsumsi yang serupa. Hasil analisis kemudian digunakan untuk memahami karakteristik masing-masing kelompok konsumsi energi.",

      cover:
        "assets/images/data/customer-segmentation-cover.png",

      media: {
        type: "pdf",

        pdf:
          "assets/pdf/data/customer-segmentation.pdf"
      }
    },


    {
      title: "Socio-Economic Indonesia Data Analysis & Visualization",

      shortDescription:
        "Visualisasi data sosial-ekonomi Indonesia dalam bentuk dashboard interaktif menggunakan Tableau.",

      description:
        "Menganalisis data sosial-ekonomi Indonesia dan menyajikan hasilnya melalui dashboard interaktif menggunakan Tableau. Proyek ini berfokus pada proses eksplorasi data, pemilihan indikator yang relevan, serta penyusunan visualisasi untuk membantu pengguna memahami kondisi sosial-ekonomi melalui informasi yang lebih terstruktur dan mudah dipahami.",

      cover:
        "assets/images/data/socio-eco.png",

      media: {
        type: "images",

        images: [
          "assets/images/data/socio-eco.png",
        ]
      }
    },


    {
      title: "Restaurant Data Analysis & Visualization",

      shortDescription:
        "Visualisasi data restoran dalam bentuk dashboard interaktif menggunakan Power BI.",

      description:
        "Menganalisis data restoran dan menyajikan hasilnya melalui dashboard interaktif menggunakan Power BI. Proyek ini berfokus pada proses eksplorasi data, pemilihan indikator yang relevan, serta penyusunan visualisasi untuk membantu pengguna memahami performa restoran melalui informasi yang lebih terstruktur dan mudah dipahami.",

      cover:
        "assets/images/data/raja-makanan.jpeg",

      media: {
        type: "images",

        images: [
          "assets/images/data/raja-makanan.jpeg",
        ]
      }
    },


    {
      title: "USArrest Data Segmentation Analysis",

      shortDescription:
        "Model deep learning berbasis MobileNet untuk mendeteksi bahasa isyarat dan diimplementasikan pada web.",

      description:
        "Mengembangkan model deep learning berbasis MobileNet untuk melakukan deteksi bahasa isyarat. Proses proyek mencakup persiapan data, pelatihan model, evaluasi hasil, serta implementasi model ke dalam aplikasi berbasis web agar dapat digunakan secara langsung. Proyek ini berfokus pada penerapan computer vision dan deep learning untuk mengenali pola visual bahasa isyarat.",

      cover:
        "assets/images/data/USArrest-cover.png",

      media: {
        type: "pdf",

        pdf:
          "assets/pdf/data/USArrest-segmentation.pdf"
      }
    },


    {
      title: "Sign Language Detection with MobileNet",

      shortDescription:
        "Model deep learning berbasis MobileNet untuk mendeteksi bahasa isyarat dan diimplementasikan pada web.",

      description:
        "Mengembangkan model deep learning berbasis MobileNet untuk melakukan deteksi bahasa isyarat. Proses proyek mencakup persiapan data, pelatihan model, evaluasi hasil, serta implementasi model ke dalam aplikasi berbasis web agar dapat digunakan secara langsung. Proyek ini berfokus pada penerapan computer vision dan deep learning untuk mengenali pola visual bahasa isyarat.",

      cover:
        "assets/images/data/sibi-cover.png",

      media: {
        type: "pdf",

        pdf:
          "assets/pdf/data/sibi.pdf"
      }
    }


    /* Tambahkan proyek Data Analysis & Science lainnya di sini */

  ]

};