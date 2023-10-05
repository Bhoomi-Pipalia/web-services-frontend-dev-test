interface IProps {
  onSearchFilter: ( search : string ) => void
}

const FilterBar = ( props : IProps ) => {

  return (
    <input
      type="text"
      name="s"
      aria-label="Search by Name"
      placeholder="Search by Name"
      className="border border-gray-300 rounded-[0.4rem] p-3 w-full"
      onChange={
        e => props.onSearchFilter( e.target.value )
      }/>
  )
}

export default FilterBar;
