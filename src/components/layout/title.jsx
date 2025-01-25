import { Space, theme, Typography } from "antd";

const { useToken } = theme;

const name = "Audit Note";

export const Title = ({
  collapsed,
  // wrapperStyles,
}) => {
  const { token } = useToken();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        // gap: "18px",
        height: "180px",
        marginTop: "18px",
      }}
      className="demo-logo-vertical"
    >
      <Space
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "inherit",
          // gap: 6,
          // ...wrapperStyles,
        }}
      >
        {collapsed && (
          <div style={{}}>
            <Typography.Title
              style={{
                fontSize: "30px",
                marginBottom: "25px",
                // marginLeft: "12px",
                color: "#fff",
                fontWeight: 700,
              }}
            >
              AN
            </Typography.Title>
          </div>
        )}

        {!collapsed && (
          <Typography.Title
            style={{
              fontSize: "30px",
              marginBottom: 25,
              marginLeft: "23px",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            {name}
          </Typography.Title>
        )}
      </Space>
    </div>
  );
};
