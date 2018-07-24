import React, { Component } from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);
        this. handleScroll=this.handleScroll.bind(this);
        this.state={
            isSticky:false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }

    handleScroll(){
        if (window.pageYOffset>this.nav.offsetTop) {
            this.setState({
                isSticky:true
            });
        } else {
            this.setState({
                isSticky:false
            });           
        }
    }

    scrollToPage(pageSelector){
        const nextPage = document.querySelector(pageSelector);
        scrollToElement(nextPage);
    }
    
    render() {

        const {
            theme:{colorPrimary,bgPrimary,navAlpha},
            switchTheme
        }=this.context;

        const stickyClass= this.state.isSticky?'sticky':'';
        const stickyStyles=this.state.isSticky
        ?{backgroundColor:navAlpha,color:colorPrimary}
        :{backgroundColor:bgPrimary,color:colorPrimary}

        return (
            <div>
                
            </div>
        );
    }
}

export default Nav;