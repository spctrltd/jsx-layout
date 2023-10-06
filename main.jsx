export default props => {
  const {children, ...remainingProps} = props
  return <main {...remainingProps}>{children}</main>
}
