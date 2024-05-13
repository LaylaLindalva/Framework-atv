import { Button, Container, Div, Div2, Div3, Numdiv2, P2div2, P2div3, Pday, Pdiv2, Pdiv3, Pgain, Section, Span, TituloPrincipal } from "../Style/App";


const App = () => {
    return(
       <Container>    
        <TituloPrincipal>Join our community</TituloPrincipal>
        <Pday>30-day, hassie-íree money back guarantee</Pday>
        <Pgain>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem totam perferendis accusamus dolore illum? Consequuntur consequatur animi aliquam</Pgain>
        

        <Div>
        <Div2>
         <Pdiv2>Monthly Subscription</Pdiv2>
         <Div>
         <Numdiv2>$29</Numdiv2>
         <Span>per menth</Span>
         </Div>
         <P2div2>Full access for less than $1 a day</P2div2>
         <Button>Sign Up</Button>
        </Div2>
        <Div3>
            <Pdiv3>Why Us</Pdiv3>
            <P2div3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, libero harum rem hic veritatis sit quas! Doloribus exercitationem nostrum optio temporibus repellendus dolorem hic ipsam, quod, nihil tenetur placeat minima.</P2div3>
        </Div3>
        </Div>
       </Container>
    )
}

export default App;