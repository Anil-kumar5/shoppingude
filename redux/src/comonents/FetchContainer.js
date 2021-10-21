import React from 'react';
import { connect } from 'react-redux';
import { fetchingData } from '../redux/Actions';
function FetchContainer(props) {
    const { postData, dispatch } = props;
    const fetData = () => {
        dispatch(fetchingData())
    }
    React.useEffect(() => {
        return fetData()
    }, [])
    return (
        <>
            {
                postData.isLoading ? (<h1>loading....</h1>) : postData.er ? (<h1>{postData.er}</h1>) : (
                    <div>
                        {
                            postData && postData.dataFetched && postData.dataFetched.map(data => {
                                return (
                                    <div key={data.id}>{data.title}</div>
                                )
                            })
                        }
                    </div>
                )
            }
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        postData: state.reducerTwo
    }
}
export default connect(mapStateToProps)(FetchContainer)