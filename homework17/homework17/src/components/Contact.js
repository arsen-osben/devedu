function Contact(props) {
    return(
        <a className="contact-item" href={"tel:" + props.data.phone}>
            <span className="contact-item__name">
                {props.data.firstName} {props.data.lastName}
            </span>
            <span className="contact-item__phone">
                {props.data.phone}
            </span>
        </a>
    )
}
export default Contact
