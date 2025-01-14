export const tabBtnStyle = {
    padding: "0px",
    flex: 1,
    height: {
      lg: '40px',
      xs: '30px'
    },
    minHeight: {
      lg: '40px',
      xs: '30px'
    },
    width: "100%",
    textAlign: "center",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "none",
    lineHeight: "1.2",
    "@media (max-width: 600px)": {
      width: "100%",
      fontSize: "12px",
      padding: "0 4px",
    },
    "@media (min-width: 600px)": {
      width: "auto",
    },
    "& .MuiTab-wrapper": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  }
 export  const tabStyle = {
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTab-root": {
      backgroundColor: "#2B8444",
      color: "#fff",
      margin: "0 5px",
      borderRadius: "5px",
      position: "relative",
      transition: "all 0.5s cubic-bezier(0.48, 0.46, 0.6, 0.57)",
      zIndex: 1,
      width: {
        lg: '70px',
        sm: '100%',
        xs: '100%'
      },
      padding: "0px",
      height: {
        lg: '40px',
        xs: '30px'
      },
      minHeight: {
        lg: '40px',
        xs: '30px'
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: "center",
      "&.Mui-selected": {
        backgroundColor: "#CB2D2E",
        color: "white",
        zIndex: 10,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: "0%",
        height: "100%",
        backgroundImage: "-webkit-linear-gradient(right, #2B8444, #CB2D2E)",
        borderRadius: "5px",
        transition: "all 0.5s cubic-bezier(0.48, 0.46, 0.6, 0.57)",
        zIndex: -1,
      },
      "&:hover": {
        color: "white",
        zIndex: 10,
        "&::after": {
          width: "100%",
        },
      },
    },
  };


  export const buttonStyle = {
    width: "100px",
    height: "25px",
    borderRadius: "2px",
    padding: "3px",
    fontSize: "10px",
    background: "linear-gradient(to right, #2B8444, #CB2D2E)",
    color: "white",
  };
