/* ============================================================
   PROJECTS DATA
   ============================================================

   File ini berisi seluruh data proyek portfolio.

   Ada 2 kelompok proyek:
   1. uiux -> UI/UX & Frontend
   2. data -> Data Analysis & Data Science 

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
      title: "Attendance Website – PT Hanampi Sejahtera Kahuripan",

      shortDescription:
        "A fish farming management website designed to help catfish farmers organize and manage their business information more efficiently.",

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
      title: "ARenaThrift – UI/UX Design",

      shortDescription:
        "A UI/UX design concept for an augmented reality thrift shopping app promoting a more sustainable fashion experience.",

      description:
        "Designed the UI/UX of ARenaThrift using Figma, an augmented reality-based online thrift shopping platform concept that promotes more sustainable alternatives to fast fashion. The design covers user flows and application interfaces to support product exploration and purchasing through a more interactive and engaging shopping experience.",

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
      title: "Travolution – UI/UX Design",

      shortDescription:
        "A mobile UI/UX design for hotel booking with customizable wishlists that can be organized based on different travel needs.",

      description:
        "Designed the UI/UX of Travolution using Figma, a mobile travel application focused on hotel booking. The design covers user interfaces and flows to help users search for and select hotels based on their travel needs. One of its distinctive features is a customizable wishlist, allowing users to create and organize hotel lists into specific categories, such as “Family Vacation,” making it easier to plan and organize their trips.",

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
      title: "Telaga Sarangan – Educational AR Game",

      shortDescription:
        "An augmented reality educational game that introduces the history of Telaga Sarangan through interactive stories and 3D objects.",

      description:
        "Designed the UI/UX and implemented an augmented reality-based educational game using Figma and Unity. The game was designed to introduce the history of Telaga Sarangan through a more interactive learning experience. Players can scan designated markers to trigger stories and 3D augmented reality objects, delivering historical information through a more engaging and interactive visual experience.",

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
      title: "LeleQue – Fish Farming Management Website",

      shortDescription:
        "Website company profile dengan katalog produk dan tampilan yang bersih serta mudah dinavigasi.",

      description:
        "Designed the UI/UX and implemented the frontend of LeleQue, a platform designed to help catfish farmers manage their business information and activities in a more structured way. The design focuses on presenting information in a simple and easy-to-understand manner while providing an interface that supports farm data management. The website was developed with the users needs in mind to make day-to-day business management more practical.",

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
        "A product ordering website with stock and order management for admins and WhatsApp-integrated ordering for customers.",

      description:
        "Designed the UI/UX using Figma and implemented the frontend of Bu'e Cookies website to support product management and ordering processes. On the admin side, the website provides features for managing product stock and orders. Customers can browse products and place orders through the website before being redirected to WhatsApp to continue the ordering process. The design focuses on providing a simple ordering flow and an easy-to-use interface.",

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
      title: "Tutor Sebaya – Learning Platform UI/UX",

      shortDescription:
        "A learning platform UI/UX connecting students with peer tutors based on subjects, tutor rankings, and schedule availability.",

      description:
        "Designed the UI/UX of Tutor Sebaya using Figma, a learning platform that connects students with peer tutors, including university students and other learners. The platform features tutor discovery and selection, a ranking system to help users find suitable tutors, and flexible scheduling based on tutor availability. Users can also register as tutors, enabling a peer-to-peer learning experience where students can both learn and share their knowledge.",

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
      title: "Buitenzorg – Outdoor Equipment Rental Website",

      shortDescription:
        "An outdoor equipment rental website designed to help users explore and choose hiking gear based on their needs.",

      description:
        "Designed the UI/UX using Figma and implemented the frontend of Buitenzorg, an equipment rental platform for hiking and outdoor activities. The website is designed to help users explore available equipment and find gear that suits their needs. The design focuses on clear product information and a simple user experience to make the process of searching for and selecting outdoor equipment more convenient.",

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
      title: "Attendance Monitoring Dashboard – PT Hanampi Sejahtera Kahuripan",

      shortDescription:
        "An attendance monitoring dashboard that presents information through 9 visual components and supports PDF export for reporting.",

      description:
        "Developed an employee attendance monitoring dashboard for PT Hanampi Sejahtera Kahuripan by organizing information according to a user-focused information hierarchy. The dashboard consists of 9 visual components that present attendance summaries and patterns in a structured manner, helping HR monitor employee attendance more effectively. It also includes a PDF export feature to simplify report preparation and sharing with relevant stakeholders.",

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
        "A K-Means clustering analysis thA K-Means clustering analysis that segments household electricity consumption patterns based on usage time and power consumption.",

      description:
        "Analyzed household electricity consumption patterns using the K-Means clustering method based on usage time and power consumption. The analysis produced several user clusters with different consumption characteristics, such as low, moderate, and high consumption. The resulting segmentation can be used to understand consumption patterns and support energy-efficiency recommendations.",

      cover:
        "assets/images/data/household-cover.png",

      media: {
        type: "pdf",

        pdf:
          "assets/pdf/data/household-power.pdf"
      }
    },


    {
      title: "COVID-19 Data Analysis & Visualization – Indonesia",

      shortDescription:
        "Analysis and visualization of COVID-19 data across Indonesian provinces through an interactive Power BI dashboard.",

      description:
        "Analyzed and visualized COVID-19 data from provinces across Indonesia using Power BI. The interactive dashboard presents information on cases, deaths, and recoveries in a visual format, allowing users to explore the distribution and development of COVID-19 conditions across regions. The visualizations include maps, trend charts, and province-level comparisons to support data exploration and pattern identification.",

      cover:
        "assets/images/data/dashboard-covid.png",

      media: {
        type: "images",

        images: [
          "assets/images/data/dashboard-covid.png",
        ]
      }
    },

    {
      title: "Customer Data Segmentation Analysis",

      shortDescription:
        "Segmentasi pelanggan menggunakan K-Means untuk mengidentifikasi kelompok berdasarkan usia, pendapatan, dan pola pengeluaran.",

      description:
        "Analyzed and segmented customer data using K-Means clustering to identify groups based on age, annual income, and spending score. The analysis included exploratory data analysis (EDA), Z-score standardization, and cluster evaluation using the Elbow Method, Silhouette Score, and Davies-Bouldin Index. The clustering resulted in 5 customer groups with different characteristics. The resulting segmentation provides insights into customer characteristics and can support more targeted marketing strategies.",

      cover:
        "assets/images/data/customer-segmentation-cover.png",

      media: {
        type: "pdf",

        pdf:
          "assets/pdf/data/customer-segmentation.pdf"
      }
    },


    {
      title: "Indonesia Socio-Economic Data Analysis & Visualization",

      shortDescription:
        "Analysis and visualization of regional socio-economic data in Indonesia using Tableau to identify key trends and indicators.",

      description:
        "Analyzed and visualized regional socio-economic data in Indonesia using Tableau to generate data-driven insights. The project presents various socio-economic indicators through interactive visualizations, allowing users to explore trends, compare conditions across regions, and understand key indicator developments more effectively. The dashboard was designed to transform complex data into clear and informative visual insights.",

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
        "Analyzed thousands of restaurant transactions across multiple branches to monitor sales performance and customer trends using Power BI.",

      description:
        "Analyzed thousands of restaurant transaction records across multiple branches to understand sales performance and customer trends. The data was processed and visualized using Power BI through an interactive dashboard featuring key sales metrics and transaction patterns. The dashboard helps users monitor performance across branches, track sales trends, and identify customer patterns to support data-driven decision-making.",

      cover:
        "assets/images/data/raja-makanan.png",

      media: {
        type: "images",

        images: [
          "assets/images/data/raja-makanan.png",
        ]
      }
    },


    {
      title: "USArrests Crime Data Clustering",

      shortDescription:
        "Segmented U.S. states based on crime patterns using K-means clustering and R.",

      description:
        "Analyzed crime patterns across 50 U.S. states using the USArrests dataset and R. The analysis included Exploratory Data Analysis (EDA), data standardization, and K-means clustering to group states based on Murder, Assault, UrbanPop, and Rape characteristics. The optimal number of clusters was determined using the Elbow Method, while the clustering results were visualized using Principal Component Analysis (PCA) and interpreted based on the characteristics of each cluster. The analysis identified four distinct groups of states with different crime patterns, providing insights that can support more targeted security policy planning.",

      cover:
        "assets/images/data/USArrest-cover.png",

      media: {
        type: "pdf",

        pdf:
          "assets/pdf/data/USArrest-segmentation.pdf"
      }
    },


    {
      title: "Sign Language Detection with MobileNet – SIBI",

      shortDescription:
        "A real-time Indonesian Sign Language (SIBI) detection system using a camera and a MobileNet-based model.",

      description:
        "Developed a system to automatically detect and recognize Indonesian Sign Language (SIBI) hand gestures using a camera. A MobileNet-based deep learning model was used to recognize various SIBI letters from real-time camera input. The model achieved over 90% accuracy in recognizing sign language letters and was implemented as a system that can support more inclusive communication applications.",

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