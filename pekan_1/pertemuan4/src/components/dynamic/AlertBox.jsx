export default function AlertBox({ type, message }) {
  const styles = {
    success: {
      background: "#d4edda",
      color: "#155724",
      padding: "12px",
      borderRadius: "6px",
      marginBottom: "10px",
    },
    warning: {
      background: "#fff3cd",
      color: "#856404",
      padding: "12px",
      borderRadius: "6px",
      marginBottom: "10px",
    },
    error: {
      background: "#f8d7da",
      color: "#721c24",
      padding: "12px",
      borderRadius: "6px",
      marginBottom: "10px",
    },
  };

  return <div style={styles[type]}>{message}</div>;
}
