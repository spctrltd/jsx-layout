export default props => {
  const {children, ...remainingProps} = props
  return <footer {...remainingProps}>{children}</footer>
}
