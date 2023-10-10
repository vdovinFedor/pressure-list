import { connect } from 'react-redux';
import { addData } from '../../actions/pressureListActions';
import FormComponent from '../../components/FormComponent';

const mapStateToProps = (state: Object) => ({ aaa: state });

const mapDispatchToProps = {
    subAction: addData,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
