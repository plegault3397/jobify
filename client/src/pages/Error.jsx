import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
    const error = useRouteError();

    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt='Not found' />
                    <h3>Ohh! page not found</h3>
                    <p>
                        We can`&apos;`t seem to find the page your looking for
                    </p>
                    <Link to='dashboard'>back home</Link>
                </div>
            </Wrapper>
        );
    }
    console.log(error);
    return (
        <Wrapper>
            <div>
                <h3>Somthing went wrong</h3>
            </div>
        </Wrapper>
    );
};
export default Error;
