const examplaURL = process.env.NEXT_BASE_EXAMPLE_URL;



function NewPage() {
    return (
        <div>
            Page {examplaURL}
        </div>
    );
}

export default NewPage;