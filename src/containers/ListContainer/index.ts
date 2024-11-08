// @flow

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import ListComponent from '../../components/ListComponent';
import { deleteData, initData } from '../../actions/pressureListActions';
import { TData } from '../../types';

interface DispatchProps {
  init: (payload: TData) => void;
  onDelete: (payload: string) => void;
}

const mapStateToProps = (state: any) => ({ lineses: state.lines.data });
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    init: (payload: TData) => bindActionCreators(initData, dispatch)(payload),
    onDelete: (payload: string) => bindActionCreators(deleteData, dispatch)(payload),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
