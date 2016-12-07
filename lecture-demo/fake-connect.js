function connect (mapStateToProps, mapDispatchToProps) {
  return function (dumbComponent) {
    class container extends React.Component {
      constructor () {
        super();
        this.state = {dumbComponentProps: {}};
      }
      componentDidMount () {
        this.unsubscribe = store.subscribe(() => {
          const fullStoreState = store.getState();
          const ourSlice = mapStateToProps(fullStoreState);
          this.setState({
            dumbComponentProps: ourSlice
          });
        });
      }
      componentWillUnmount () {
        this.unsubscribe();
      }
      render () {
        return React.cloneElement(
          dumbComponent,
          this.state.dumbComponentProps
        );
      }
    }
    return container;
  }
}