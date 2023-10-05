// @flow

import { connect } from 'react-redux';
import ListComponent from '../../components/ListComponent';

const mapStateToProps = (state: any) => ({ lineses: state.lines.data });
export default connect(mapStateToProps)(ListComponent);
