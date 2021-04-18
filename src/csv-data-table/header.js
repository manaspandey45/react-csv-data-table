
import React from 'react';
import {
    Header ,
    HeaderName
} from "carbon-components-react/lib/components/UIShell";
class PageHeader extends React.PureComponent {

    render() {
        return <Header aria-label="">
            <HeaderName
                href="#"
                prefix="CSV Display"
            >
            </HeaderName>
        </Header>
    }
}

export default PageHeader;