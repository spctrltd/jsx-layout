import Header from './header'
import Footer from './footer'
import Main from './main'

export default props => {
  const {children, header, footer, main, ...remainingProps} = props
  const {props: mainProps} = main
  const {props: headerProps, children: headerChildren} = header
  const {props: footerProps, children: footerChildren} = footer
  return (
    <div {...remainingProps}>
      <Header {...headerProps}>{headerChildren}</Header>
      <Main {...mainProps}>{children}</Main>
      <Footer {...footerProps}>{footerChildren}</Footer>
    </div>
  )
}
