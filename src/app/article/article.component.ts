import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  ArticleForm: FormGroup = this.fb.group({
    Title: ['', [Validators.required]],
    Body: ['', [Validators.required]],
    Tags: ['', [Validators.required]],
    Reference: ['', [Validators.required]],
    RelatedArticle: ['', [Validators.required]],
    Createdon: ['', [Validators.required]],
    CreatedBy: ['', [Validators.required]],
    LastModifiedBy: ['', [Validators.required]],
    LastModifiedOn: ['', [Validators.required]],



  })


  constructor(
    private fb: FormBuilder,
    private article: ArticleService
  ) { }


  success = false;

  ngOnInit(): void {
  }

  
  onSubmit(){
    console.log("Form is valid : ", this.ArticleForm.valid);
    this.article.AddArticle(this.ArticleForm.value).subscribe({
      next: (response) => {
          this.success = true;
          this.ArticleForm.reset(); 
          console.log(response);

      }
      })
  }
}