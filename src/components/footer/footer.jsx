import styles from "./footer.module.css"
const Footer = () => {

  const date = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="footer">
      <p>Copyright © {date} Miguel Chito. All rights reserved.</p>
    
    </footer>
  )
}

export default Footer
