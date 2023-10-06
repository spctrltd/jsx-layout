export default props => {
  const {links = [], header, footer, ...remainingProps} = props
  const {props: headerProps, children: headerChildren} = header
  const {props: footerProps, children: footerChildren} = footer
  return (
    <nav {...remainingProps}>
      <div {...headerProps}>{headerChildren}</div>
      <div>
        <ul>
          {links.map(link => (
            <li>{link}</li>
          ))}
        </ul>
      </div>
      <div {...footerProps}>{footerChildren}</div>
    </nav>
  )
}
