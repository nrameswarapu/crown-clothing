import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (
    <div>
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.map(({id, ...otherProps}) => (
                        <CollectionItem key={id} {...otherProps}/>
                    ))
                }
            </div>
        </div>
    </div>
);

export default CollectionPreview;