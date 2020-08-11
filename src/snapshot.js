<ModalTester>
  <div>
    <div />
    <Modal
      ignoreFrame={false}
      visible={true}
    >
      <Portal containerInfo={
          <body>
            <div
              class="cloud-modal"
              id="mask"
            >
              <div
                class="cloud-modal-mask"
              />
              <div
                class="cloud-modal-container transition"
                style="pointer-events: auto;"
              >
                <header
                  class="cloud-modal-header"
                >
                  <span
                    class="cloud-modal-title"
                  >
                    title
                  </span>
                  <i
                    class="close-icon cloud-icon cloud-icon-close"
                  />
                </header>
                <section
                  class="cloud-modal-body"
                >
                  Here is content of Modal
                </section>
                <footer
                  class="cloud-modal-footer"
                >
                  <button
                    class="cloud-button primary default cloud-modal-confirm-btn"
                    type="button"
                  >
                    确定
                  </button>
                  <button
                    class="cloud-button normal default"
                    type="button"
                  >
                    取消
                  </button>
                </footer>
              </div>
            </div>
          </body>
        }
      >
        <Notification
          bodyStyle={Object {}}
          cancelText="取消"
          clickMaskCanClose={true}
          disabledOk={false}
          footer=""
          hasFooter={true}
          ignoreFrame={false}
          modalStyle={Object {}}
          okText="确定"
          onCancel={[Function]}
          onClose={[Function]}
          onOk={[Function]}
          showConfirmLoading={false}
          showMask={true}
          title="title"
          type="modal"
          visible={true}
        >
          <div
            className="cloud-modal"
            id="mask"
          >
            <ModalMask
              clickMaskCanClose={true}
              onClose={[Function]}
              onReset={[Function]}
              showMask={true}
            >
              <div
                className="cloud-modal-mask"
                onClick={[Function]}
              />
            </ModalMask>
            <div
              className="cloud-modal-container"
              style={
                Object {
                  "left": "",
                  "pointerEvents": "auto",
                  "top": "",
                }
              }
            >
              <ModalHeader
                onClose={[Function]}
                onMouseDown={[Function]}
                onReset={[Function]}
                title="title"
                type="modal"
              >
                <header
                  className="cloud-modal-header"
                  onMouseDown={[Function]}
                >
                  <span
                    className="cloud-modal-title"
                    onMouseDown={[Function]}
                  >
                    title
                  </span>
                  <Icon
                    className="close-icon"
                    onClick={[Function]}
                    onMouseDown={[Function]}
                    style={Object {}}
                    type="close"
                  >
                    <i
                      className="close-icon cloud-icon cloud-icon-close"
                      onClick={[Function]}
                      onMouseDown={[Function]}
                      style={Object {}}
                    />
                  </Icon>
                </header>
              </ModalHeader>
              <ModalBody
                style={Object {}}
              >
                <section
                  className="cloud-modal-body"
                  style={Object {}}
                >
                  Here is content of Modal
                </section>
              </ModalBody>
              <ModalFooter
                cancelText="取消"
                disabledOk={false}
                footer=""
                hasFooter={true}
                okText="确定"
                onCancel={[Function]}
                onOk={[Function]}
                onReset={[Function]}
                showConfirmLoading={false}
                type="modal"
                visible={true}
              >
                <footer
                  className="cloud-modal-footer"
                >
                  <Button
                    block={false}
                    className="cloud-modal-confirm-btn"
                    disabled={false}
                    href=""
                    htmlType="button"
                    loading={false}
                    onClick={[Function]}
                    size="default"
                    target=""
                    type="primary"
                  >
                    <button
                      className="cloud-button primary default cloud-modal-confirm-btn"
                      disabled={false}
                      onClick={[Function]}
                      type="button"
                    >
                      确定
                    </button>
                  </Button>
                  <Button
                    block={false}
                    className=""
                    disabled={false}
                    href=""
                    htmlType="button"
                    loading={false}
                    onClick={[Function]}
                    size="default"
                    target=""
                    type="normal"
                  >
                    <button
                      className="cloud-button normal default"
                      disabled={false}
                      onClick={[Function]}
                      type="button"
                    >
                      取消
                    </button>
                  </Button>
                </footer>
              </ModalFooter>
            </div>
          </div>
        </Notification>
      </Portal>
    </Modal>
  </div>
</ModalTester>