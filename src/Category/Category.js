
function Category(props) {
    const {category} = props.match.params;

    console.log(category)
    return category
    
}

export default Category;