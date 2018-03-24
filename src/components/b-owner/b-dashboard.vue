<template>
<div>
  <center>
    <ul class="bg-dark">
        <br>
        <br>
        <li><img src="blue-head.jpg" width="100" class="rounded-circle"></li>
        <br>
        <br>
        <li><a href="news.asp">Profile</a></li>
        <li><a href="contact.asp">Off the shelf</a></li>
        <li><a href="about.asp">Made-to-order</a></li>
    </ul>
</center>
    <div style="margin-left:175pt;padding:20px 20px;height:1000px">
        <br>
        <table class="table table-striped table-hover">
            <thead class="thead thead-light">
                <tr>
                    <th>Project</th>
                    <th>Responsible Freelancer</th>
                    <th>Progress</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Hotel 101</td>
                    <td>Name Surname</td>
                    <td>69%</td>
                </tr>
                <tr>
                    <td>Hotel 101</td>
                    <td>Name Surname</td>
                    <td>69%</td>
                </tr>
                <tr>
                    <td>Hotel 101</td>
                    <td>Name Surname</td>
                    <td>69%</td>
                </tr>
                <tr>
                    <td>Hotel 101</td>
                    <td>Name Surname</td>
                    <td>69%</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<style>
        body{
            margin: 0;
        }
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            width: 175pt;
            height: 100%;
            position: fixed;
        }

        li a {
            display: block;
            color: #FFFFFF;
            padding: 8px 16px;
            text-decoration-color: #FFFFFF;
        }

        /* Change the link color on hover */
        li a:hover {
            background-color: #555;
            color: white;
        }
        table{
            width: 100%;
            margin-outside: 100px;
        }
        th, td {
            border-bottom: 1px solid #ddd;
        }
    </style>
    <script>
    export default {
      
    }
    </script>
    
