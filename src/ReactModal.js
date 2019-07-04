import React,{Component} from 'react';
import { Button, Modal } from 'react-bootstrap';

export class extends Component{

    render() {
        return (
          <div>
            <Modal show={this.props.showModal} onHide={this.close} className="fade">
              <div id="save-modal" styleName="save-modal">
                <div styleName="modal-content">
                  <div styleName="modal-header">
                    <h4 id="myModalLabel" styleName="modal-title">DEPENDENCY COMMENT</h4>
                  </div>
                  <div className="modal-body" styleName="modal-body">
                    <div className="form-group">
                      <input type="text"
                        className="form-control p-search  rename-search pull-left"
                        id="comment"
                        ref={(comment) => { this.comment = comment; }}
                        name="comment"
                        rows="5"
                        value={this.state.comment}
                        placeholder="Comments"
                        onChange={this.onChange}
                        autoComplete="off"
                        maxLength="100"
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className="modal-footer" styleName="modal-footer">
                    <Button type="button" className="linkbtns" styleName="addButtonSpace" data-dismiss="modal" onClick={this.close}>CANCEL</Button>
                    <Button type="button" className="linkbtns" styleName="addButtonSpace" onClick={this.saveData} disabled={this.props.creatingManualDependency || this.state.disabledSaveBtn}>
                      {lblBtn}
                    </Button>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        );
      }
}