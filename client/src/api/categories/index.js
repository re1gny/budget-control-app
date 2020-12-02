import { apiService } from '../../services/ApiService';
import { withAuthorizationToken } from '../../utils/authorization/withAuthorizationToken';

export const getCategoriesRequest = () => {
    return apiService.get(
        '/api/categories',
        null,
        {
            headers: withAuthorizationToken(),
        },
    );
};

export const addCategoryRequest = ({ displayName, type }) => {
    return apiService.post(
        '/api/categories/add',
        { displayName, type },
        {
            headers: withAuthorizationToken(),
        },
    );
};
