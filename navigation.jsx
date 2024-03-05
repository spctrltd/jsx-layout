export default props => {
  const {links, header, footer, ...remainingProps} = props
  const {props: headerProps, children: headerChildren} = header
  const {props: footerProps, children: footerChildren} = footer
  const {data = [], props: linkProps} = links
  return (
    <nav {...remainingProps}>
      <div {...headerProps}>{headerChildren}</div>
      <div>
        <ul>
          {data.map(link => (
            <li {...linkProps}>{link}</li>
          ))}
        </ul>
      </div>
      <div {...footerProps}>{footerChildren}</div>
    </nav>
  )
}
