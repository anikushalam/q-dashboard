"use client";
import { useEffect, useState } from "react";
import "@/app/styles/variables.css";
import "../styles/fonts.css";
import { imageShowUrl2, imagekitUrl } from "@/utils/BaseUrl";
import style from "../features/QvipleFeatures.module.css";
import Footer from "@/components/Services/ServiceDetails/footer/Footer";
import ProductCard from "@/components/Career/CFeatures/ProcuctCard";
import Navbar from "@/components/Navbars/Navbar/Navbar";
import Head from "next/head";

function Modules() {
  const [theme, setTheme] = useState("light-theme");
  const [fearurees, setFeaturees] = useState(null);
  const modules = [
    {
      heading: "Admision Procedure and Application Management",
      link: "/services/admission",
      img: `/images/light-theme/admission-icon.png`,
      content:
        "Onboarding or enrolling users, whether they are students, employees, or other stakeholders, Qviple LMS typically includes functionalities to facilitate different enrollment methods.",
      feats: [
        {
          alt: "application",
          img: `${imagekitUrl}/Qviple_Landing/icons/application.png`,
          para: "Scan QR code, fill application form, and conveniently upload documents online without the hassle of photocopies.",
          text: "Admission Application",
        },
        {
          alt: " fee structure",
          img: `${imagekitUrl}/Qviple_Landing/icons/feestructure.png`,
          para: "Implement an online fee collection system using UPI, payment apps, cards, and net banking, while also facilitating fee collection through NEFT, RTGS, and demand drafts, supported by an automated pending fee reminder",
          text: "Fee structure",
        },
        {
          alt: "Enquiry",
          img: `${imagekitUrl}/Qviple_Landing/icons/enquiry.png`,
          para: "Team Qviple is available 24/7 to assist you with any issues or queries related to the platform.",
          text: "Enquiry and Support",
        },
        {
          alt: "funds",
          img: `${imagekitUrl}/Qviple_Landing/icons/fund.png`,
          para: "Collect funds through our payment gateway for improved collection efficiency. Access cash and bank balances with a single click, while maintaining detailed records of expenses, incomes, and transaction history for all receipts and payments",
          text: "Fund Management",
        },
        {
          alt: "payment",
          img: `${imagekitUrl}/Qviple_Landing/icons/payment.png`,
          para: "Eliminate the need for physical paper-based invoices and fee receipts by automatically generating and sending invoices, bills, and fee receipts to the respective individuals or students for pending fees",
          text: "Pending Fee and Receipt",
        },
        // {
        //   alt: "account",
        //   img: `${imagekitUrl}/Qviple_Landing/icons/account.png`,
        //   para: "Efficiently manage income and expenses with accurate tracking and analysis of financial transactions for effective financial planning and decision-making",
        //   text: "Income and Expense Management",
        // },
        {
          alt: "payroll",
          img: `${imagekitUrl}/Qviple_Landing/icons/payroll.png`,
          para: "Automate payroll system by integrating staff's attendance with Qviple, generate pay-slip with one-click, and enable automated settlement in finance balance while providing online pay-slips to staffs.",
          text: "Payroll",
        },
        {
          alt: "moderator",
          img: `${imagekitUrl}/Qviple_Landing/icons/moderator.png`,
          para: "Assign moderator access to different departments, such as finance, admission, and more, enabling effective control and oversight over specific areas of operation",
          text: "Moderator",
        },
      ],
    },
    {
      heading: "Funds Management",
      img: `/images/light-theme/funds-icon.png`,
      link: "/services/finance",
      content:
        "Funds management in Qviple ERP involves efficiently handling financial resources, budgeting, tracking expenditures, and ensuring compliance with financial policies.",
      feats: [
        {
          alt: "Budgeting",
          img: `/images/light-theme/budget.png`,
          para: "Establish budgetary controls to define financial limits for different departments, projects, or cost centers. Set up budget approval workflows for the review and approval of budgets by relevant stakeholders.",
          text: "Budgeting",
        },
        {
          alt: " Expense Management",
          img: `/images/light-theme/icome.png`,
          para: "Integrate income and expense management modules to streamline the reimbursement process and track your expenses. Provide dashboards and reports for stakeholders to visualize budget utilization and variances.",
          text: "Income Expense Management",
        },
        {
          alt: "Financial Controls",
          img: `/images/light-theme/finance-growth.png`,
          para: "Implement financial controls and authorization levels to prevent unauthorized spending. Include segregation of duties to ensure accountability and reduce the risk of fraud.",
          text: "Financial Controls",
        },
        {
          alt: "Financial Reporting",
          img: `/images/light-theme/auditing.png`,
          para: "Generate detailed financial reports to provide insights into funds utilization, budget adherence, and financial performance. Customize reports to meet the specific reporting needs of stakeholders.",
          text: "Financial Reporting",
        },
        {
          alt: "Encumbrance Accounting",
          img: `/images/light-theme/budget.png`,
          para: "Implement encumbrance accounting to reserve funds for planned expenditures before actual expenses occur. Keep track of committed funds to avoid overspending.",
          text: "Encumbrance Accounting",
        },
        {
          alt: "Compliance and Auditing",
          img: `${imagekitUrl}/Qviple_Landing/icons/fund.png`,
          para: "Ensure that the ERP system supports compliance with financial regulations and standards. Facilitate auditing processes by providing access to detailed transaction records.",
          text: "Compliance and Auditing",
        },
        {
          alt: "Integration",
          img: `/images/light-theme/modules.png`,
          para: "Integrate forecasting and planning tools to project future expenses and allocate funds accordingly.",
          text: "Integration with Other Modules",
        },
      ],
    },
    {
      heading: "Customized Department and Classes",
      img: `/images/light-theme/user-account-icon.png`,

      content:
        "Qviple involves creating a system that allows educational institutions to tailor their organizational structure and courses based on their specific needs.",
      feats: [
        {
          alt: "Department Creation",
          img: `${imagekitUrl}/Qviple_Landing/icons/setup.png`,
          para: ":Allow administrators to create and define departments based on the institution's organizational structure. Provide options to set department names, codes, and descriptions.",
          text: "Department Creation",
        },
        {
          alt: "Assigning Roles",
          img: `${imagekitUrl}/Qviple_Landing/icons/dept.png`,
          para: "Enable the assignment of roles within each department, such as department heads, instructors, and support staff. Allow for customization of permissions based on roles within the department.",
          text: "Assigning Roles",
        },
        {
          alt: "Department-Specific Resources",
          img: `/images/light-theme/department-fetch.png`,
          para: "Implement a resource center within each department where relevant documents, announcements, and other materials can be shared. Allow customization of resources based on the department's requirements.",
          text: "Department-Specific Resources",
        },

        {
          alt: "Course Creation",
          img: `/images/light-theme/course.png`,
          para: "Allow instructors to create and customize courses within their assigned departments. Provide options for setting course names, descriptions, and objectives.",
          text: "Course Creation",
        },
        {
          alt: "Custom Grading Scales",
          img: `/images/light-theme/grade.png`,
          para: "Support customization of grading scales for different courses or departments. Allow instructors to set specific grading criteria and weightage.",
          text: "Custom Grading Scales",
        },
        {
          alt: "Assessment Customization",
          img: `/images/light-theme/assessment.png`,
          para: "Allow instructors to create and customize assessments tailored to each course's learning objectives. Support various assessment formats, including exams, quizzes, projects, and discussions.",
          text: "Assessment Customization",
        },
      ],
    },
    {
      heading: "Plateform for E-Content",
      img: `/images/light-theme/e-content.png`,
      link: "/services/elearning",

      content:
        "E-content in Qviple(LMS) refers to digital materials used for educational purposes. These materials can include text, images, videos, and interactive elements. Implementing e-content effectively in an LMS enhances the learning experience for students.",
      feats: [
        {
          alt: "Course Authoring Tools",
          img: `${imagekitUrl}/Qviple_Landing/icons/application.png`,
          para: "Rich Editors are used for creating and formatting text content and integration of images, videos, audio, and other multimedia elements",
          text: "Course Authoring Tools",
        },
        {
          alt: "payroll",
          img: `${imagekitUrl}/Qviple_Landing/icons/payroll.png`,
          para: "rack and manage different versions of course content. View the history of changes made to course materials",
          text: "Content Versioning",
        },
        {
          alt: "Course Templates",
          img: `${imagekitUrl}/Qviple_Landing/icons/brand.png`,
          para: "Pre-designed Templates for common course structures that can be tailored to specific instructional needs.",
          text: "Course Templates",
        },
        {
          alt: "Content",
          img: `${imagekitUrl}/Qviple_Landing/icons/subject.png`,
          para: "Multiple instructors or content creators can collaborate on course development.  Platforms for instructors and learners to discuss course content in real-time",
          text: "Content Collaboration",
        },
        {
          alt: "Accessibility",
          img: `${imagekitUrl}/Qviple_Landing/icons/application.png`,
          para: "Qviple erp nsures that course content complies with accessibility standards. Tags and metadata for easy categorization and retrieval",
          text: "Accessibility Features",
        },
        {
          alt: "Branding",
          img: `${imagekitUrl}/Qviple_Landing/icons/application.png`,
          para: "Allow institutions to customize the look and feel of the LMS, including branding options for logos, colors, and themes. Reflect the institution's identity.",
          text: "Branding Options",
        },
      ],
    },
    {
      heading: "E-Library Module",
      img: `/images/light-theme/batch-icon.png`,
      link: "/services/library",
      content:
        "E-library in Qviple LMS can house various educational materials, including e-books, research papers, journals and other content.",
      feats: [
        {
          alt: "E-books and Documents",
          img: `/images/light-theme/books.png`,
          para: "Support the inclusion of e-books, PDFs, Word documents, and other text-based materials. Enable users to navigate through and download these resources.",
          text: "E-books and Documents",
        },
        {
          alt: "Categorization and Tagging",
          img: `/images/light-theme/sorting.png`,
          para: "Implement a categorization system to organize resources into topics, subjects, or disciplines. Allow administrators to tag resources with relevant keywords for improved searchability.",
          text: "Categorization and Tagging",
        },
        {
          alt: "Search Functionality",
          img: `/images/light-theme/searchh.png`,
          para: "Provide a robust search engine to enable users to quickly find resources based on keywords, authors, or topics.",
          text: "Search Functionality",
        },
        {
          alt: "Access Levels",
          img: `/images/light-theme/no-access.png`,
          para: "Implement access controls to define user permissions based on roles (students, instructors, administrators). Ensure secure access to sensitive materials.",
          text: "Access Levels",
        },
        {
          alt: "Responsive Design",
          img: `/images/light-theme/responsive.png`,
          para: "Ensure that the e-library is accessible across various devices, including desktops, laptops, tablets, and smartphones. Implement responsive design principles.",
          text: "Responsive Design",
        },
        {
          alt: "Usage Analytics",
          img: `/images/light-theme/analytics.png`,
          para: "Implement analytics tools to track the usage of e-library resources. Generate reports on resource popularity, user engagement, and download statistics.",
          text: " Usage Analytics",
        },
        {
          alt: "Digital Rights Management",
          img: `/images/light-theme/copyright.png`,
          para: "Implement features to ensure compliance with copyright laws and regulations. Provide information on usage rights and restrictions for each resource.",
          text: "Digital Rights Management",
        },
      ],
    },
    {
      heading: "Curricular and Co Curricular Activities",
      img: `/images/light-theme/curricular.png`,
      link: "/services/sport",
      content:
        "Support the design, organization, and management of educational content and courses. These features are essential for creating structured learning experiences, managing course materials, and monitoring learner progress",
      feats: [
        {
          alt: "Sports Event",
          img: `/images/light-theme/sport.png`,
          para: "Offer online courses related to sports and physical education. Include instructional videos, quizzes, and assessments to reinforce learning",
          text: "Sports Event",
        },
        {
          alt: "Team Spaces",
          img: `${imagekitUrl}/Qviple_Landing/icons/econtentt.png`,
          para: "Create dedicated spaces within the LMS for sports teams or clubs. Facilitate communication, file sharing, and collaboration among team members.",
          text: "Team Spaces",
        },

        {
          alt: "Organise Competitions",
          img: `${imagekitUrl}/Qviple_Landing/icons/streaming.png`,
          para: "Organize sports competitions or challenges that participants can join from anywhere. Enable leaderboard tracking and recognition for top performers.",
          text: "Organise Competitions",
        },
        {
          alt: "Event Calendar",
          img: `${imagekitUrl}/Qviple_Landing/icons/offline.png`,
          para: "Include an event calendar to schedule and promote sports events, matches, or tournaments. Provide details such as date, time, location, and participant information.",
          text: "Event Calendar",
        },

        {
          alt: "Skill Assessment",
          img: `${imagekitUrl}/Qviple_Landing/icons/assessment.png`,
          para: "Utilize Qviple skill assessmnt to test your students' learning, schedule and conduct objective and subjective exams seamlessly.",
          text: "Skill Assessment",
        },
        {
          alt: "Games",
          img: `${imagekitUrl}/Qviple_Landing/icons/games.png`,
          para: "Efficiently manage games and sports meets in Qviple by adding student players, creating teams with captains, organizing matches, updating winners and runner-ups, and automatically assigning skill points to students for their participation and performance.",
          text: "Management Games and Sports Meets",
        },
        {
          alt: "Seminars",
          img: `${imagekitUrl}/Qviple_Landing/icons/seminar.png`,
          para: "Conduct seminars and discussions, providing opportunities for interactive and collaborative learning experiences, promoting knowledge sharing, critical thinking, and active participation among students",
          text: "Seminars and Discussions",
        },
        {
          alt: "Cultural",
          img: `${imagekitUrl}/Qviple_Landing/icons/event.png`,
          para: "Reward students for their skills and participation in cultural events, providing automated extra-curricular points for their involvement and achievements in various artistic and cultural activities",
          text: "Cultural Events",
        },
      ],
    },
    {
      heading: "Alumni Cell",
      img: `/images/light-theme/alumni-icon.png`,
      link: "/services/alumni",
      content:
        "Alumni Cell within Qviple(LMS) can help educational institutions maintain a strong and engaged alumni network. It fosters meaningful connections, promotes professional development.",
      feats: [
        {
          alt: "Alumni Database",
          img: `/images/light-theme/db.png`,
          para: "Create a centralized database of alumni profiles within the LMS. Include information such as name, contact details, graduation year, and current ",
          text: "Alumni Database",
        },
        {
          alt: "Profile Customization",
          img: `/images/light-theme/customization.png`,
          para: "Allow alumni to customize their profiles by adding professional achievements, skills, and personal information. Include options for uploading a profile picture and connecting social media profiles.",
          text: "Profile Customization",
        },

        {
          alt: "Alumni Directory",
          img: `/images/light-theme/directory.png`,
          para: "Implement an alumni directory to facilitate networking among alumni. Include search and filtering options based on criteria such as industry, location, or graduation year.",
          text: "Alumni Directory",
        },
        {
          alt: "Discussion Forums",
          img: `/images/light-theme/discussion-forum.png`,
          para: "Integrate discussion forums for alumni to share experiences, advice, and career insights. Create topic-specific forums for various industries or interests.",
          text: "Discussion Forums",
        },

        {
          alt: "Alumni Engagement Analytics",
          img: `/images/light-theme/engagement.png`,
          para: "Implement analytics tools to track alumni engagement, event attendance, and participation in various activities. Generate reports on alumni network growth and contributions.",
          text: "Alumni Engagement Analytics",
        },
      ],
    },
    {
      heading: "Accommodation Management",
      img: `/images/light-theme/accommodation.png`,
      link: "/services/hostel",
      content:
        "Hostel module within Qviple(LMS) streamlines and enhances the management of student accommodations. It provides a seamless experience for both students and administrators.",
      feats: [
        {
          alt: "Room Allocation",
          img: `/images/light-theme/db.png`,
          para: "Provide tools for administrators to allocate rooms to students based on preferences, availability, and any specific criteria. Allow students to view their assigned rooms.",
          text: "Room Allocation",
        },
        {
          alt: "Room Details",
          img: `/images/light-theme/customization.png`,
          para: "Include details about each room, such as room number, capacity, and facilities. Allow administrators to update and maintain accurate information about each room.",
          text: "Room Details",
        },

        {
          alt: "Roommate Preferences",
          img: `/images/light-theme/directory.png`,
          para: "Allow students to specify roommate preferences, such as gender, lifestyle, or study habits. Implement a matching algorithm to suggest compatible roommates.",
          text: "Roommate Preferences",
        },
        {
          alt: "Facility Information",
          img: `/images/light-theme/discussion-forum.png`,
          para: "Include information about hostel facilities, amenities, and services available to students. Provide details about common areas, laundry services, study spaces, etc.",
          text: "Facility Information",
        },

        {
          alt: "Announcements",
          img: `/images/light-theme/engagement.png`,
          para: "Enable administrators to post announcements and important information related to hostel residents. Notify students about policy updates, events, or maintenance schedules.",
          text: "Announcements",
        },
        {
          alt: "Occupancy Reports",
          img: `/images/light-theme/engagement.png`,
          para: "Generate occupancy reports to track room occupancy rates and availability. Use analytics tools to identify trends and patterns.",
          text: "Occupancy Reports",
        },
      ],
    },
    {
      heading: "Career & Tender Module",
      img: `/images/light-theme/career-icon.png`,
      link: "/services/career",
      content:
        "This erp module aims to help employees plan, manage, and advance in their careers by providing access to relevant learning resources, career path information, and skill development opportunities",
      feats: [
        {
          alt: "Job Board",
          img: `${imagekitUrl}/Qviple_Landing/icons/job.png`,
          para: " Integrate a job board within the LMS to share job opportunities and career openings. Allow alumni to post job listings or internship opportunities.",
          text: "Job Board",
        },
        {
          alt: "job application process",
          img: `${imagekitUrl}/Qviple_Landing/icons/application-process.png`,
          para: "Discover a simple and intuitive interface that anyone can easily navigate, along with multilingual support to accommodate people from different backgrounds, ensuring a seamless application process for everyone",
          text: "Easy, Intuitive Application Process",
        },
        {
          alt: "branding",
          img: `${imagekitUrl}/Qviple_Landing/icons/brand.png`,
          para: "Go digital, expand your institute's horizons nationwide, and create an online presence that knows no boundaries in this digital era.",
          text: "Connection and Branding",
        },
        {
          alt: "tender",
          img: `${imagekitUrl}/Qviple_Landing/icons/tender.png`,
          para: "Unlock detailed tender information and a comprehensive bidder list with Qviple. Seamlessly explore lucrative opportunities, pursue contracts with confidence, and maximize your business potential",
          text: "Tender Details with Bider List",
        },
      ],
    },
    {
      heading: "Transportation module",
      img: `/images/light-theme/bus.png`,
      link: "/services/transport",
      content:
        "Transport module for an institute can help streamline the management of transportation services for students, faculty, and staff.",
      feats: [
        {
          alt: "User Registration",
          img: `${imagekitUrl}/Qviple_Landing/icons/application.png`,
          para: " Allow users (students, faculty, staff) to register their transportation preferences and details. Collect information such as home address, preferred pickup/drop-off points, and contact information.",
          text: "User Registration",
        },
        {
          alt: "Define Routes",
          img: `/images/light-theme/route.png`,
          para: "Create and manage predefined transportation routes for different areas or neighborhoods. Include details such as pickup/drop-off points, route maps, and estimated timings.",
          text: "Define Routes",
        },
        {
          alt: "Real-Time Tracking",
          img: `/images/light-theme/tracking.png`,
          para: "Integrate real-time tracking features to allow users to track the location of buses or vehicles. Provide an interface within the LMS or a dedicated mobile app for tracking.",
          text: "Real-Time Tracking",
        },
        {
          alt: "Schedule Creation",
          img: `/images/light-theme/schedule.png`,
          para: "Generate schedules for each route, including pickup and drop-off timings at different locations. Consider morning and evening schedules for academic days.",
          text: "Schedule Creation",
        },
        {
          alt: "Notifications",
          img: `/images/light-theme/notifications.png`,
          para: "Send automated notifications and alerts to users about upcoming pickups, delays, or cancellations. Use email, SMS, or push notifications based on user preferences.",
          text: "Notifications",
        },
        {
          alt: "Driver and Vehicle Information",
          img: `/images/light-theme/driver.png`,
          para: "Maintain records of drivers, vehicles, and their certifications. Ensure compliance with safety regulations and driver background checks.",
          text: "Driver and Vehicle Information",
        },
      ],
    },
  ];
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <Head>
        <title>Modules Provided at Qviple</title>
        <meta
          name="description"
          content="Qviple LMS modules include user management for voth learners and educators, learning content with effective scalable ways."
        />
        <link rel="canonical" href="/features" />
      </Head>
      <div className={`${style.newHeadContainerOverlay} ${style.modulebg}`}>
        <div id="navbar" className={style.lightnavbar}>
          <Navbar status="module" setHasScrolled={setHasScrolled} />
        </div>

        <div className={style.moduleHead}>
          <h3>We Offer Better Digital Experience</h3>

          <h5>
            Engaging design and robust development means our digital solutions
            really do deliver.
          </h5>
        </div>
      </div>
      {!fearurees ? (
        <div className={style.offeredModule}>
          {modules.map((mod, index) => (
            <ProductCard
              key={index}
              img={mod.img}
              heading={mod.heading}
              text={mod.content}
              link={mod?.link}
              handleclick={() => setFeaturees(mod.feats)}
            />
          ))}
        </div>
      ) : (
        <div className={style.offeredModuleDetails}>
          <img
            className={style.offeredModuleDetailsHead}
            src={`${imagekitUrl}/Qviple_Landing/close-icon-black.png`}
            alt=""
            onClick={() => setFeaturees(null)}
          />

          {fearurees &&
            fearurees.map((f, index) => (
              <div className={style.offeredModuleDetailsCard} key={index}>
                <div className={style.offeredModuleDetailsIcon}>
                  <img src={f.img} alt="icon  " />
                </div>
                <div className={style.offeredModuleDetailsText}>
                  <h5>{f.text}</h5>
                  <p>{f.para}</p>
                </div>
              </div>
            ))}
        </div>
      )}

      <Footer status="modules" />
    </>
  );
}

export default Modules;
