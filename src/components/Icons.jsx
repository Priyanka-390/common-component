import { useLocation } from "react-router-dom";

export const Star = () => {
  return (
    <svg
      width="94"
      height="18"
      viewBox="0 0 94 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.53746 0.500122L10.4543 6.3997H16.6575L11.639 10.0458L13.5559 15.9454L8.53746 12.2993L3.51898 15.9454L5.43587 10.0458L0.417389 6.3997H6.62057L8.53746 0.500122Z"
        fill="#FF9F0D"
      />
      <path
        d="M27.6131 0.500122L29.53 6.3997H35.7332L30.7147 10.0458L32.6316 15.9454L27.6131 12.2993L22.5947 15.9454L24.5116 10.0458L19.4931 6.3997H25.6963L27.6131 0.500122Z"
        fill="#FF9F0D"
      />
      <path
        d="M46.6893 0.500122L48.6062 6.3997H54.8094L49.7909 10.0458L51.7078 15.9454L46.6893 12.2993L41.6708 15.9454L43.5877 10.0458L38.5692 6.3997H44.7724L46.6893 0.500122Z"
        fill="#FF9F0D"
      />
      <path
        d="M65.765 0.500122L67.6819 6.3997H73.8851L68.8666 10.0458L70.7835 15.9454L65.765 12.2993L60.7465 15.9454L62.6634 10.0458L57.6449 6.3997H63.8481L65.765 0.500122Z"
        fill="#FF9F0D"
      />
      <path
        d="M84.8412 0.500122L86.7581 6.3997H92.9612L87.9428 10.0458L89.8596 15.9454L84.8412 12.2993L79.8227 15.9454L81.7396 10.0458L76.7211 6.3997H82.9243L84.8412 0.500122Z"
        fill="#FF9F0D"
      />
    </svg>
  );
};
export const LeftArrow = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.53803 11.4697C8.24514 11.7626 8.24514 12.2374 8.53803 12.5303L16.038 20.0303C16.3309 20.3232 16.8058 20.3232 17.0987 20.0303C17.3916 19.7374 17.3916 19.2626 17.0987 18.9697L10.129 12L17.0987 5.03033C17.3916 4.73744 17.3916 4.26256 17.0987 3.96967C16.8058 3.67678 16.3309 3.67678 16.038 3.96967L8.53803 11.4697Z"
        fill="black"
        className="group-hover:fill-white"
      />
    </svg>
  );
};
export const RightArrow = () => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.4615 11.4697C16.7544 11.7626 16.7544 12.2374 16.4615 12.5303L8.96148 20.0303C8.66859 20.3232 8.19372 20.3232 7.90082 20.0303C7.60793 19.7374 7.60793 19.2626 7.90082 18.9697L14.8705 12L7.90082 5.03033C7.60793 4.73744 7.60793 4.26256 7.90082 3.96967C8.19372 3.67678 8.66859 3.67678 8.96148 3.96967L16.4615 11.4697Z"
        fill="black"
        className="group-hover:fill-white"
      />
    </svg>
  );
};
export const DashBoard = () => {
    const location = useLocation();
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
         className={`${
          location.pathname === "/tabs" ? "stroke-[#EC6707] duration-300" : "stroke-black"
        }`}
        d="M10.2348 1.59343C9.86722 1.74567 9.53773 2.07516 8.8788 2.73409C8.22003 3.39286 7.8904 3.72249 7.73818 4.08998C7.53519 4.58004 7.53519 5.13072 7.73818 5.62078C7.89042 5.98832 8.21989 6.31779 8.87883 6.97673C9.5374 7.6353 9.86729 7.96519 10.2347 8.11739C10.7248 8.32038 11.2755 8.32037 11.7655 8.11739C12.1331 7.96515 12.4625 7.63568 13.1215 6.97673C13.7804 6.31779 14.1089 5.98832 14.2612 5.62078C14.4641 5.13072 14.4641 4.58004 14.2612 4.08998C14.1089 3.72244 13.7804 3.39303 13.1215 2.73409C12.4625 2.07515 12.1331 1.74567 11.7655 1.59343C11.2755 1.39045 10.7248 1.39045 10.2348 1.59343Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
         className={`${
          location.pathname === "/tabs" ? "stroke-[#EC6707] duration-300" : "stroke-black"
        }`}
        d="M3.8705 7.9572C3.50296 8.10944 3.17348 8.43892 2.51455 9.09786C1.85579 9.75661 1.52614 10.0863 1.37392 10.4538C1.17093 10.9438 1.17093 11.4945 1.37392 11.9845C1.52616 12.3521 1.85564 12.6816 2.51457 13.3405C3.17314 13.9991 3.50303 14.329 3.87047 14.4812C4.36053 14.6841 4.91121 14.6841 5.40126 14.4812C5.76881 14.3289 6.09828 13.9994 6.75722 13.3405C7.41616 12.6816 7.74466 12.3521 7.8969 11.9845C8.09989 11.4945 8.09989 10.9438 7.8969 10.4538C7.74466 10.0862 7.41616 9.7568 6.75722 9.09786C6.09828 8.43892 5.76881 8.10944 5.40126 7.9572C4.91121 7.75422 4.36056 7.75422 3.8705 7.9572Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        className={`${
          location.pathname === "/tabs" ? "stroke-[#EC6707] duration-300" : "stroke-black"
        }`}
        d="M15.2431 9.09786C14.5843 9.75662 14.2547 10.0863 14.1024 10.4538C13.8994 10.9438 13.8994 11.4945 14.1024 11.9845C14.2547 12.3521 14.5842 12.6816 15.2431 13.3405C15.9016 13.9991 16.2316 14.329 16.599 14.4812C17.089 14.6841 17.6397 14.6841 18.1298 14.4812C18.4973 14.3289 18.8268 13.9994 19.4857 13.3405C20.1447 12.6816 20.4732 12.3521 20.6254 11.9845C20.8284 11.4945 20.8284 10.9438 20.6254 10.4538C20.4732 10.0862 20.1447 9.75679 19.4857 9.09786C18.8268 8.43892 18.4973 8.10944 18.1298 7.9572C17.6397 7.75422 17.0891 7.75422 16.599 7.9572C16.2315 8.10944 15.902 8.43893 15.2431 9.09786Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
         className={`${
          location.pathname === "/tabs" ? "stroke-[#EC6707] duration-300" : "stroke-black"
        }`}
        d="M10.2348 14.3215C9.86722 14.4737 9.53774 14.8032 8.8788 15.4621C8.22004 16.1209 7.8904 16.4505 7.73818 16.818C7.53519 17.3081 7.53519 17.8587 7.73818 18.3488C7.89042 18.7163 8.21989 19.0458 8.87883 19.7048C9.53739 20.3633 9.86729 20.6932 10.2347 20.8454C10.7248 21.0484 11.2755 21.0484 11.7655 20.8454C12.1331 20.6932 12.4625 20.3637 13.1215 19.7048C13.7804 19.0458 14.1089 18.7163 14.2612 18.3488C14.4641 17.8587 14.4641 17.3081 14.2612 16.818C14.1089 16.4505 13.7804 16.1211 13.1215 15.4621C12.4625 14.8032 12.1331 14.4737 11.7655 14.3215C11.2755 14.1185 10.7248 14.1185 10.2348 14.3215Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const FormIcon = () => {
  const location = useLocation();
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
         className={`${
          location.pathname === "/form" ? "stroke-[#EC6707] duration-300" : "stroke-black"
        }`}
        d="M8 8.21951H6.2002C5.08009 8.21951 4.51962 8.21951 4.0918 8.4375C3.71547 8.62925 3.40973 8.93499 3.21799 9.31131C3 9.73913 3 10.2996 3 11.4197V17.0197C3 18.1398 3 18.6996 3.21799 19.1274C3.40973 19.5037 3.71547 19.81 4.0918 20.0017C4.5192 20.2195 5.07899 20.2195 6.19691 20.2195H17.8031C18.921 20.2195 19.48 20.2195 19.9074 20.0017C20.2837 19.81 20.5905 19.5037 20.7822 19.1274C21 18.7 21 18.141 21 17.0231V11.4164C21 10.2985 21 9.73871 20.7822 9.31131C20.5905 8.93499 20.2837 8.62925 19.9074 8.4375C19.4796 8.21951 18.9203 8.21951 17.8002 8.21951H16M8 8.21951H16M8 8.21951C8 6.01037 9.79086 4.21951 12 4.21951C14.2091 4.21951 16 6.01037 16 8.21951"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const AccordionIcon = () => {
   const location = useLocation();
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
         className={`${
          location.pathname === "/acc" ? "stroke-[#EC6707] duration-300" : "stroke-black"
        }`}
        d="M14 6.21951H6C5.06812 6.21951 4.60192 6.21951 4.23438 6.37175C3.74432 6.57474 3.35523 6.96432 3.15224 7.45438C3 7.82192 3 8.28786 3 9.21974C4.65685 9.21974 6 10.5624 6 12.2193C6 13.8761 4.65685 15.2195 3 15.2195C3 16.1514 3 16.6173 3.15224 16.9849C3.35523 17.4749 3.74432 17.8642 4.23438 18.0672C4.60192 18.2194 5.06812 18.2195 6 18.2195H14M14 6.21951H18C18.9319 6.21951 19.3978 6.21951 19.7654 6.37175C20.2554 6.57474 20.6447 6.96432 20.8477 7.45438C20.9999 7.82192 20.9999 8.28786 20.9999 9.21974C19.343 9.21974 18 10.5627 18 12.2195C18 13.8764 19.343 15.2195 20.9999 15.2195C20.9999 16.1514 20.9999 16.6173 20.8477 16.9849C20.6447 17.4749 20.2554 17.8642 19.7654 18.0672C19.3978 18.2194 18.9319 18.2195 18 18.2195H14M14 6.21951V18.2195"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const SliderIcon = () => {
  const location = useLocation();
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={`${
          location.pathname === "/swiper" ? "stroke-[#EC6707] duration-300" : "stroke-black"
        }`}
        d="M6 7.41971V16.9049C6 18.2659 6 18.9463 6.20412 19.3628C6.58245 20.1347 7.41157 20.5783 8.26367 20.4649C8.7234 20.4037 9.28964 20.0262 10.4221 19.2713L10.4248 19.2695C10.8737 18.9702 11.0981 18.8206 11.333 18.7376C11.7642 18.5852 12.2348 18.5852 12.666 18.7376C12.9013 18.8207 13.1266 18.971 13.5773 19.2714C14.7098 20.0264 15.2767 20.4036 15.7364 20.4648C16.5885 20.5781 17.4176 20.1347 17.7959 19.3628C18 18.9464 18 18.2657 18 16.9049V7.41642C18 6.29851 18 5.73871 17.7822 5.31131C17.5905 4.93499 17.2837 4.62925 16.9074 4.4375C16.4796 4.21951 15.9203 4.21951 14.8002 4.21951H9.2002C8.08009 4.21951 7.51962 4.21951 7.0918 4.4375C6.71547 4.62925 6.40973 4.93499 6.21799 5.31131C6 5.73913 6 6.2996 6 7.41971Z"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const MailIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6.4566L10.1076 11.0689L10.1097 11.0706C10.7878 11.5679 11.1271 11.8167 11.4988 11.9128C11.8272 11.9978 12.1725 11.9978 12.501 11.9128C12.8729 11.8166 13.2132 11.5671 13.8926 11.0689C13.8926 11.0689 17.8101 8.06254 20 6.4566M3 16.2568V8.65679C3 7.53669 3 6.97622 3.21799 6.54839C3.40973 6.17207 3.71547 5.86633 4.0918 5.67458C4.51962 5.4566 5.08009 5.4566 6.2002 5.4566H17.8002C18.9203 5.4566 19.4796 5.4566 19.9074 5.67458C20.2837 5.86633 20.5905 6.17207 20.7822 6.54839C21 6.9758 21 7.53559 21 8.65351V16.2602C21 17.3781 21 17.9371 20.7822 18.3645C20.5905 18.7408 20.2837 19.0471 19.9074 19.2388C19.48 19.4566 18.921 19.4566 17.8031 19.4566H6.19691C5.07899 19.4566 4.5192 19.4566 4.0918 19.2388C3.71547 19.0471 3.40973 18.7408 3.21799 18.3645C3 17.9367 3 17.3769 3 16.2568Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export const BellIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 17.4566V18.4566C15 20.1135 13.6569 21.4566 12 21.4566C10.3431 21.4566 9 20.1135 9 18.4566V17.4566M15 17.4566H9M15 17.4566H18.5905C18.973 17.4566 19.1652 17.4566 19.3201 17.4044C19.616 17.3046 19.8475 17.0722 19.9473 16.7764C19.9997 16.6209 19.9997 16.4281 19.9997 16.0425C19.9997 15.8738 19.9995 15.7895 19.9863 15.709C19.9614 15.557 19.9024 15.4129 19.8126 15.2878C19.7651 15.2217 19.7048 15.1614 19.5858 15.0424L19.1963 14.6529C19.0706 14.5272 19 14.3567 19 14.179V10.4566C19 6.5906 15.866 3.45659 12 3.4566C8.13401 3.45661 5 6.59061 5 10.4566V14.179C5 14.3568 4.92924 14.5272 4.80357 14.6529L4.41406 15.0424C4.29476 15.1617 4.23504 15.2216 4.1875 15.2878C4.09766 15.413 4.03815 15.557 4.0132 15.709C4 15.7895 4 15.8738 4 16.0426C4 16.4281 4 16.6208 4.05245 16.7763C4.15225 17.0722 4.3848 17.3046 4.68066 17.4044C4.83556 17.4566 5.02701 17.4566 5.40956 17.4566H9"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
export const MessageIcon = () => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 18.4566L22.1076 23.0689L22.1097 23.0706C22.7878 23.5679 23.1271 23.8167 23.4988 23.9128C23.8272 23.9978 24.1725 23.9978 24.501 23.9128C24.8729 23.8166 25.2132 23.5671 25.8926 23.0689C25.8926 23.0689 29.8101 20.0625 32 18.4566M15 28.2568V20.6568C15 19.5367 15 18.9762 15.218 18.5484C15.4097 18.1721 15.7155 17.8663 16.0918 17.6746C16.5196 17.4566 17.0801 17.4566 18.2002 17.4566H29.8002C30.9203 17.4566 31.4796 17.4566 31.9074 17.6746C32.2837 17.8663 32.5905 18.1721 32.7822 18.5484C33 18.9758 33 19.5356 33 20.6535V28.2602C33 29.3781 33 29.9371 32.7822 30.3645C32.5905 30.7408 32.2837 31.0471 31.9074 31.2388C31.48 31.4566 30.921 31.4566 29.8031 31.4566H18.1969C17.079 31.4566 16.5192 31.4566 16.0918 31.2388C15.7155 31.0471 15.4097 30.7408 15.218 30.3645C15 29.9367 15 29.3769 15 28.2568Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const AlertIcon = () => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27 29.4566V30.4566C27 32.1135 25.6569 33.4566 24 33.4566C22.3431 33.4566 21 32.1135 21 30.4566V29.4566M27 29.4566H21M27 29.4566H30.5905C30.973 29.4566 31.1652 29.4566 31.3201 29.4044C31.616 29.3046 31.8475 29.0722 31.9473 28.7764C31.9997 28.6209 31.9997 28.4281 31.9997 28.0425C31.9997 27.8738 31.9995 27.7895 31.9863 27.709C31.9614 27.557 31.9024 27.4129 31.8126 27.2878C31.7651 27.2217 31.7048 27.1614 31.5858 27.0424L31.1963 26.6529C31.0706 26.5272 31 26.3567 31 26.179V22.4566C31 18.5906 27.866 15.4566 24 15.4566C20.134 15.4566 17 18.5906 17 22.4566V26.179C17 26.3568 16.9292 26.5272 16.8036 26.6529L16.4141 27.0424C16.2948 27.1617 16.235 27.2216 16.1875 27.2878C16.0977 27.413 16.0381 27.557 16.0132 27.709C16 27.7895 16 27.8738 16 28.0426C16 28.4281 16 28.6208 16.0525 28.7763C16.1523 29.0722 16.3848 29.3046 16.6807 29.4044C16.8356 29.4566 17.027 29.4566 17.4096 29.4566H21"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="32"
        cy="18.4566"
        r="4.75"
        fill="#FF3B30"
        stroke="white"
        stroke-width="1.5"
      />
    </svg>
  );
};
export const ArrowIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 11.4566L12 14.4566L9 11.4566"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};