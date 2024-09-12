import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        Job <span>tracking</span> app
                    </h1>
                    <p>
                        I&apos;m baby mixtape messenger bag everyday carry
                        aesthetic iPhone. Heirloom aesthetic chicharrones
                        vaporware next level locavore deep v plaid cold-pressed
                        sriracha gentrify pok pok ennui fit. Selfies whatever
                        poutine quinoa intelligentsia freegan hot chicken
                        farm-to-table butcher chicharrones mixtape plaid. Tote
                        bag mukbang woke palo santo tattooed coloring book
                        kitsch enamel pin authentic. Photo booth tumblr migas
                        humblebrag shaman meh selfies venmo. Tote bag austin
                        hammock whatever, DSA roof party next level street art
                        offal kinfolk tonx vexillologist.
                    </p>
                    <Link to='/register' className='btn register-link'>
                        Register
                    </Link>
                    <Link to='/login' className='btn'>
                        Login / Demo User
                    </Link>
                </div>
                <img src={main} alt='Job hunt' className='img main-img' />
            </div>
        </Wrapper>
    );
};

export default Landing;
