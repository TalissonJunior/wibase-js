export class Wibase {

    initializeApp() {

    }
}

/**
 * 
        var model = {
            $action: 'get',
            $table: 'project',
            $columns: ['name', 'id'],
            $childs: [
                {
                    $dependency: {
                        $table: 'project_category',
                        $parent_fk: 'fk_project_id',
                        $child_fk: 'fk_category_id'
                    },
                    $table: 'category',
                    $columns: ['id', 'name']
                }
            ]
        }
 */