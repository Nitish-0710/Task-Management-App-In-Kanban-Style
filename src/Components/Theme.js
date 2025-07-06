export const theme = {
    backlog: {
        primary: "#f48998", // Soft coral
        dark: "#FD4976", // 15% darker
        text: "#ffffff", // White text for contrast
        hover: "#e07a8a", // Saturated hover state
        active: "#c96b7a", // Pressed state
    },
    doing: {
        primary: "#f4e789", // Pale yellow
        dark: "#EAD21F",
        text: "#5a4d00", // Dark text for readability
        hover: "#e6d97a",
        active: "#d0c46b",
    },
    review: {
        primary: "#F1BB87", // Mint green
        dark: "#F78E69",
        text: "#003d00", // Deep green text
        hover: "#7ae580",
        active: "#6bcf70",
    },
    done: {
        primary: "#D1AFE9", // Sky blue
        dark: "#B57FDC",
        text: "#003d4d", // Navy text
        hover: "#7ad4e5",
        active: "#6bbfd0",
    },
    navbar: {
        light: {
            background: "#AEEAD7", // Matches doing.primary lightened
            text: "#5A4D00", // Dark yellow-brown
            border: "#5DD5AF", // Slightly darker than background
            hover: "#E6D97A", // Doing column hover color
            active: "#D8CF7A", // Doing column dark variant
        },
        dark: {
            background: "#1E2952", // Dark slate
            text: "#F4E789", // Doing column primary
            border: "#3A3636",
            hover: "#4A4545",
            active: "#5A4D00", // Text color from light mode
        },
    },
};

// Utility functions for dynamic adjustments
export const getButtonStyles = (status) => ({
    base: {
        backgroundColor: theme[status].primary,
        color: theme[status].text,
        border: "none",
        borderRadius: "4px",
        padding: "8px 16px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
            backgroundColor: theme[status].hover,
            transform: "translateY(-1px)",
        },
        "&:active": {
            backgroundColor: theme[status].active,
            transform: "translateY(0)",
        },
        "&:focus-visible": {
            outline: `2px solid ${theme[status].dark}`,
            outlineOffset: "2px",
        },
    },
    disabled: {
        backgroundColor: theme[status].light,
        color: theme[status].dark,
        cursor: "not-allowed",
    },
});
