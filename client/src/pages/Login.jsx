import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';

const Login = () => {
    return (
        <Wrapper>
            <form action='' className='form'>
                <Logo />
                <h4>Login</h4>
                <FormRow
                    type='email'
                    name='email'
                    defaultValue='phil.legault@gmail.com'
                />
                <FormRow
                    type='password'
                    name='pasword'
                    defaultValue='secret123'
                />
                <button type='submit' className='btn btn-block'>
                    submit
                </button>
                <button type='button' className='btn btn-block'>
                    Explore the app
                </button>
                <p>
                    Not a member yet?
                    <Link to='/register' className='member-btn'>
                        Register
                    </Link>
                </p>
            </form>
        </Wrapper>
    );
};
export default Login;