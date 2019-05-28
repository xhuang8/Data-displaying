<!--step3: Initial DataTables -->
<script>
$(document).ready( function () {
    $('#table_id').DataTable (
        {
            "processing": true,
            "serverSide": true,
            "ajax": {
                url: 'releases.json',
                data: 'dataSet',
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                dataSrc: ''
            },
            "columns": [
                {"releases": "id"},
                {"releases": "realtime_start"},
                {"releases": "realtime_end"},
                {"releases": "name"},
                {"releases": "press_release"},
                {"releases": "notes"}
            ]
        }
    );
} );
</script>