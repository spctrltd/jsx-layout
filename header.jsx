export default props => {
  const {children, ...remainingProps} = props
  return <header {...remainingProps}>{children}</header>
}
