export const Carte = () => {
    return (
        <>
            <div className='section' id='carte'>
                <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Notre Carte
                </a>
            </div>
            <div class="collapse" id="collapseExample">
                <div class="container">
                    <div class="row">
                        <div class="col" style={{backgroundColor:'red'}}>
                            1
                        </div>
                        <div class="col" style={{backgroundColor:'orange'}}>
                            2
                        </div>
                        <div class="col" style={{backgroundColor:'green'}}>
                            3
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}