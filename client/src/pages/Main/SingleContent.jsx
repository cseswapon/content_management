import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchSingleContent from '../../redux/thunk/singleContent/fetchSingContent';
import {useDispatch, useSelector } from 'react-redux';
import Content from '../component/Content/Content';

const SingleContent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSingleContent(id))
    }, [dispatch, id]);
    const {singleData:{data}} = useSelector(state => state);
    return (
        <div>
            <Content content={data} />
        </div>
    );
};

export default SingleContent;