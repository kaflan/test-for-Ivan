import { connect } from 'redux';
import SignIn from '../../components/SignInComponent';
import { signIn } from '../../store/actions/auth';

export default connect(null, {
  signIn
})(SignIn);
