<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Midterm Grade Calculator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            padding: 30px;
            background-color: #f8f9fa;
        }
        .container {
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 30px;
        }
        h1, h2 {
            margin-bottom: 20px;
        }
        .result {
            background-color: #e9f7ef;
            border-left: 5px solid #28a745;
            padding: 20px;
            border-radius: 8px;
        }
    </style>
</head>
<body>
<div class="container">
    <h1 class="text-center">📘 Midterm Grade Calculator</h1>
    <form method="post">
        <h4>Class Activity</h4>
        <div class="row mb-3">
            <div class="col"><input type="number" name="undertaking" class="form-control" placeholder="Undertaking (100)" required></div>
            <div class="col"><input type="number" name="fa1" class="form-control" placeholder="FA1 (20)" required></div>
            <div class="col"><input type="number" name="fa2" class="form-control" placeholder="FA2 (30)" required></div>
        </div>
        <div class="row mb-3">
            <div class="col"><input type="number" name="sw1" class="form-control" placeholder="SW1 (10)" required></div>
            <div class="col"><input type="number" name="fa3" class="form-control" placeholder="FA3 (20)" required></div>
            <div class="col"><input type="number" name="fa4" class="form-control" placeholder="FA4 (30)" required></div>
        </div>

        <h4>Long Quizzes</h4>
        <div class="row mb-3">
            <div class="col"><input type="number" name="sa1" class="form-control" placeholder="SA1 (50)" required></div>
            <div class="col"><input type="number" name="sa2" class="form-control" placeholder="SA2 (50)" required></div>
        </div>

        <h4>Recitation / Attendance / Participation</h4>
        <div class="row mb-3">
            <div class="col"><input type="number" name="attendance" class="form-control" placeholder="Attendance (25)" required></div>
            <div class="col"><input type="number" name="recitation" class="form-control" placeholder="Recitation (5)" required></div>
        </div>

        <h4>Exam</h4>
        <div class="row mb-3">
            <div class="col"><input type="number" name="mq" class="form-control" placeholder="MQ for Midterm (50)" required></div>
            <div class="col"><input type="number" name="midterm_exam" class="form-control" placeholder="Midterm Exam (100)" required></div>
        </div>

        <div class="d-grid gap-2">
            <button type="submit" name="calculate" class="btn btn-primary">Calculate Midterm Grade</button>
        </div>
    </form>

    <?php
    if (isset($_POST['calculate'])) {
        $undertaking = $_POST['undertaking'];
        $fa1 = $_POST['fa1'];
        $fa2 = $_POST['fa2'];
        $sw1 = $_POST['sw1'];
        $fa3 = $_POST['fa3'];
        $fa4 = $_POST['fa4'];
        $sa1 = $_POST['sa1'];
        $sa2 = $_POST['sa2'];
        $attendance = $_POST['attendance'];
        $recitation = $_POST['recitation'];
        $mq = $_POST['mq'];
        $midterm_exam = $_POST['midterm_exam'];

        $ca = (($undertaking + $fa1 + $fa2 + $sw1 + $fa3 + $fa4) / 210) * 100;
        $lq = (($sa1 + $sa2) / 100) * 100;
        $rap = (($attendance + $recitation) / 30) * 100;
        $cs = ($ca * 0.4) + ($lq * 0.45) + ($rap * 0.15);
        $exam = (($mq + $midterm_exam) / 150) * 100;
        $midterm_lec = ($cs * 0.6) + ($exam * 0.4);
    ?>
        <div class="result mt-4">
            <h4>📊 Results</h4>
            <p><strong>Class Activity:</strong> <?= round($ca, 2) ?></p>
            <p><strong>Long Quizzes:</strong> <?= round($lq, 2) ?></p>
            <p><strong>RAP:</strong> <?= round($rap, 2) ?></p>
            <p><strong>Class Standing (CS):</strong> <?= round($cs, 2) ?></p>
            <p><strong>Exam:</strong> <?= round($exam, 2) ?></p>
            <h5><strong>✅ Midterm LEC Grade:</strong> <?= round($midterm_lec, 2) ?></h5>
        </div>
    <?php } ?>
</div>
</body>
</html>

