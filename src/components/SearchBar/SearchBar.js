import { View, Text } from 'react-native'
import { searchBarStyles } from './SearchBar.styles';

const SearchBar = () => {
    return (
        <View style={searchBarStyles.container} >
            <Text >
                Search
            </Text>
        </View>
    )
}

export default SearchBar