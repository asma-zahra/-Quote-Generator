import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import {addQuote } from '../lib/api'

function NewQoute() {
    const{sendRequest, status}=useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status=== 'completed'){
            history.push('/quotes');
        }
    }, [status, history]);
    const addQuoteHandler=(quotedata)=>{
        sendRequest(quotedata)
        // console.log(quotedata);

        }
    return (
        <div>
            <QuoteForm isLoading={status==='pending'}  onAddQuote={addQuoteHandler}/>
        </div>
    )
}

export default NewQoute
