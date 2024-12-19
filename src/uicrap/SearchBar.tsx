// the search bar

function SearchBar() {
	return (
		<div className="flex gap align-center">
			<div>添加课程</div>
			<input type="text" placeholder="搜索课程" className="graybutton f-1" />
		</div>
	)
}

export default SearchBar;