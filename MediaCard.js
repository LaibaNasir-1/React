
function MediaCard(arg){ //now it is a component and can be used multiple times with different parameters
    return(
      <div>
        <h4>{arg.ti}</h4>
        <p>{arg.description}</p>
        <img src = {arg.image} alt="Kitten" />
      </div>
    )
  }
  export default MediaCard;
